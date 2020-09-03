<template>
    <v-container>
        <v-row>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Материал</th>
                        <th class="text-left" colspan="2">Размер</th>
                        <th class="text-left">Вес</th>
                        <th class="text-left">Количество</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="p in aggregatedPackages.aggregatedPackages" :key="p[0]">
                        <td>{{ p[1].material.name }}</td>
                        <td>{{ p[1].amount }}</td>
                        <td>({{ p[1].volumeMarker }})</td>
                        <td>{{ p[1].weight }} kg</td>
                        <td>{{ p[1].count }} шт</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-row>
        <v-row>
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                    <tr>
                        <td>Общий объём:</td>
                        <td>{{ aggregatedPackages.totalVolume }}</td>
                    </tr>
                    <tr>
                        <td>Остаток места:</td>
                        <td>{{ aggregatedPackages.freeVolume }}S</td>
                    </tr>
                    <tr>
                        <td>Заполнение:</td>
                        <td>{{ aggregatedPackages.ratio }}%</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-row>
    </v-container>
</template>

<script>
    const lorryVolume = 168

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

                const aggregatedPackages = Array.from(accumulator).sort((x1, x2) => x2[0] - x1[0]);
                console.log("Aggregated: %s", JSON.stringify(aggregatedPackages))

                const totalVolume = aggregatedPackages.map(pair => pair[1]).map(ap => ap.volumeSize * ap.count)
                    .reduce((prevValue, currentValue) => prevValue + currentValue, 0)
                const freeVolume = lorryVolume - totalVolume
                const ratio = Math.round(totalVolume * 100.0 / lorryVolume)
                return {aggregatedPackages, totalVolume, freeVolume, ratio}
            },
        }
    }
</script>

<style scoped>

</style>
