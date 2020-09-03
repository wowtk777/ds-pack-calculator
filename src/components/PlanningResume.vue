<template>
    <div>
        Resume
        <div v-for="p of aggregatedPackages" :key="p[0]">
            {{ p[1] }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlanningResume",
        computed: {
            aggregatedPackages() {
                const accumulator = new Map()
                this.$store.state.board.map(b => b.packages).flat()
                    .forEach(pi => {
                        let key = pi.key
                        if (accumulator.has(key)) {
                            accumulator.get(key).aggregate(pi)
                        } else {
                            accumulator.set(key, pi.clone())
                        }
                    })

                const sorted = Array.from(accumulator).sort((x1, x2) => x2[0] - x1[0]);
                console.log("Aggregated: %s", JSON.stringify(sorted))
                return sorted
            }
        }
    }
</script>

<style scoped>

</style>
