<template>
    <div class="result-grid">
        <div v-for="pckg in packages" :key="pckg.size">
            {{ pckg.size }}: {{ pckg.count }}
        </div>
    </div>
</template>

<script>
    let preparePackages = function (type) {
        return [1, 2, 4, 8, 12, 16, 20].map(x => x * type)
    }
    export default {
        name: 'ResultGrid',
        props: {
            type: Number,
            requiredResources: Number,
            readyResources: Number,
        },
        computed: {
            packages: function () {
                return preparePackages(this.type).map(function (x) {
                    return {
                        size: x,
                        count: 0
                    }
                })
            }
        }
    }
</script>
