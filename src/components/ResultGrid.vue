<template>
    <div class="result-grid">
        <div v-for="cargo in cargoInfo.packages" :key="cargo.size" class="result-grid-packages">
            <div class="result-grid-size">{{ cargo.amount }} ({{ cargo.marker }}) {{ cargo.weight }} kg:</div>
            <div class="result-grid-count">{{ cargo.count }}</div>
        </div>
        <div class="result-grid-over-resources">
            Перерасход: {{ cargoInfo.overResources }}
        </div>
        <div class="result-grid-weight">
            Масса: {{ cargoInfo.weight }} kg
        </div>
        <div class="result-grid-volume-size">
            Объём: {{ cargoInfo.volumeSize }}S
        </div>
    </div>
</template>

<script>
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

    let buildPreparePackages = function (type) {
        let packageInfos = [1, 2, 4, 8, 12, 16, 20].map(convertSizeToInfo).map(x => ({
                amount: type.smallestAmount * x.size,
                weight: type.smallestWeight * x.size,
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
        props: {
            type: Object,
            requiredResources: Number,
            readyResources: Number,
        },
        computed: {
            cargoInfo: function () {
                let preparePackages = buildPreparePackages(this.type);
                let delta = Math.max(0, this.requiredResources - this.readyResources);
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
