<template>
    <v-container class="input-form">
        <v-row class="align-center">
            <v-col cols="4">
                <v-form>
                    <v-text-field label="Необходимое количество" v-model="requiredResources"/>
                    <v-text-field label="Существующее количество" v-model="readyResources"/>

                    <v-radio-group v-model="type">
                        <v-radio v-for="t of types" :key="t.name" :label="t.name" :value="t"></v-radio>
                    </v-radio-group>
                </v-form>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <ResultGrid v-bind:required-resources="requiredResourcesNum"
                            v-bind:ready-resources="readyResourcesNum"
                            v-bind:type="type"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ResultGrid from "./ResultGrid";

    let types = [
        {name: 'Смолы', smallestAmount: '40', smallestWeight: 10},
        {name: 'Металлы', smallestAmount: '50', smallestWeight: 15},
        {name: 'Керамика', smallestAmount: '80', smallestWeight: 13},
        {name: 'Спецсплавы', smallestAmount: '60', smallestWeight: 12},
    ]

    export default {
        name: 'InputForm',
        data: function () {
            return {
                requiredResources: 0,
                readyResources: 0,
                type: types[1],
                types
            }
        },
        computed: {
            requiredResourcesNum() {
                return parseInt(this.requiredResources)
            },
            readyResourcesNum() {
                return parseInt(this.readyResources)
            },
        },
        components: {
            ResultGrid
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
