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
                            <td>({{ cargo.volumeMarker }})</td>
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
    import PackageInfo from "./package-info";

    let buildPreparePackages = function (material) {
        let packageInfos = [1, 2, 4, 8, 12, 16, 20]
            .map(size => new PackageInfo(size, material))

        return {
            smallest: packageInfos[0],
            packageInfos: packageInfos.reverse()
        }
    }
    export default {
        name: 'ResultGrid',
        methods: {
            onClick: function () {
                let material = store.getters.material
                let packages = this.cargoInfo.packages.filter(p => p.count)
                let cargoInfo = {...this.cargoInfo, material, packages}
                delete cargoInfo.overResources
                store.commit('addCargoInfo', cargoInfo)
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

                let packages = []
                for (let packageInfo of preparePackages.packageInfos) {
                    let {deltaAmount, deltaWeight, deltaVolumeSize} = packageInfo.setupCount(resourcesLeft)
                    packages.push(packageInfo)
                    resourcesLeft -= deltaAmount
                    weight += deltaWeight
                    volumeSize += deltaVolumeSize
                }

                return {overResources, weight, volumeSize, packages}
            }
        }
    }
</script>
