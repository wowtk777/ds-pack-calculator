<template>
    <div class="result-grid">
        <div v-for="pckg in packageInfo.packages" :key="pckg.size" class="result-grid-packages">
            <div class="result-grid-size">{{ pckg.size }}:</div>
            <div class="result-grid-count">{{ pckg.count }}</div>
        </div>
        <div class="result-grid-over-resources">
            Перерасход: {{ packageInfo.overResources }}
        </div>
    </div>
</template>

<script>
    let buildPreparePackages = function (type) {
        let sizes = [1, 2, 4, 8, 12, 16, 20].map(x => x * type);
        return {
            smallest: sizes[0],
            sizes: sizes.reverse()
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
            packageInfo: function () {
                let preparePackages = buildPreparePackages(this.type.smallestAmount);
                let delta = Math.max(0, this.requiredResources - this.readyResources);
                let resourcesLeft =
                    Math.ceil(delta / preparePackages.smallest) *
                    preparePackages.smallest;
                let overResources = resourcesLeft - delta
                console.log("preparePackages.smallest = %s; delta=%s; resourcesLeft=%s", preparePackages.smallest, delta, resourcesLeft)

                let packages = []
                for (let size of preparePackages.sizes) {
                    let count = Math.floor(resourcesLeft / size)
                    packages.push({size, count})
                    resourcesLeft = resourcesLeft - size * count
                }

                return {overResources, packages}
            }
        }
    }
</script>
