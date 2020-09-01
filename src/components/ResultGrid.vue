<template>
    <div class="result-grid">
        <v-container>
            <v-row>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left" colspan="2">Размер</th>
                            <th class="text-left">Вес</th>
                            <th class="text-left">Количество</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="cargo in cargoInfo.packages" :key="cargo.size">
                            <td>{{ cargo.amount }}</td>
                            <td>({{ cargo.marker }})</td>
                            <td>{{ cargo.weight }} kg</td>
                            <td>{{ cargo.count }} шт</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-row>
            <v-row>
                <v-btn value="+" @click="onClick" class="info">+</v-btn>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                        <tr>
                            <td>Перерасход:</td>
                            <td>{{ cargoInfo.overResources }}</td>
                        </tr>
                        <tr>
                            <td>Масса:</td>
                            <td>{{ cargoInfo.weight }} kg</td>
                        </tr>
                        <tr>
                            <td>Объём:</td>
                            <td>{{ cargoInfo.volumeSize }}S</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import store from "./store";

    let convertSizeToInfo = function (size) {
        let volumeSize = size > 4 ? 6 : size;
        let marker = '';

        switch (volumeSize) {
            case 1:
                marker = 'S'
                break;
            case 2:
                marker = 'M'
                break;
            case 4:
                marker = 'L'
                break;
            case 6:
                marker = 'XL'
                break;
        }

        return {size, marker, volumeSize}
    }

    let buildPreparePackages = function (material) {
        let packageInfos = [1, 2, 4, 8, 12, 16, 20].map(convertSizeToInfo).map(x => ({
                amount: material.smallestAmount * x.size,
                weight: material.smallestWeight * x.size,
                ...x
            }
        ));
        return {
            smallest: packageInfos[0],
            packageInfos: packageInfos.reverse()
        }
    }
    export default {
        name: 'ResultGrid',
        methods: {
            onClick: function () {
                let cargoInfo = this.cargoInfo;
                delete cargoInfo.overResources
                cargoInfo.material = store.getters.material
                cargoInfo.packages = cargoInfo.packages.filter(p => p.count)
                store.commit('addPackage', cargoInfo)
            }
        },
        computed: {
            cargoInfo: function () {
                let preparePackages = buildPreparePackages(store.getters.material);
                let delta = Math.max(0, store.getters.requiredResources - store.getters.readyResources);
                let resourcesLeft =
                    Math.ceil(delta / preparePackages.smallest.amount) *
                    preparePackages.smallest.amount;
                let overResources = resourcesLeft - delta
                let weight = 0
                let volumeSize = 0
                console.log("preparePackages.smallest.amount = %s; delta=%s; resourcesLeft=%s", preparePackages.smallest.amount, delta, resourcesLeft)

                let packages = []
                for (let packageInfo of preparePackages.packageInfos) {
                    let amount = packageInfo.amount
                    let count = Math.floor(resourcesLeft / amount)
                    packages.push({count, ...packageInfo})
                    resourcesLeft = resourcesLeft - amount * count
                    weight += packageInfo.weight * count
                    volumeSize += packageInfo.volumeSize * count
                }

                return {overResources, packages, weight, volumeSize}
            }
        }
    }
</script>
