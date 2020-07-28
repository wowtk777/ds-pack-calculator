<template>
    <div class="input-form">
        <form>
            <label for="required-resources">Необходимое количество</label>
            <input id="required-resources" v-model="requiredResources" type="text"/>
            <br/>
            <label for="ready-resources">Существующее количество</label>
            <input id="ready-resources" v-model="readyResources" type="text"/>
            <br/>

            <div v-for="t of types" :key="t.name">
                <input id="type" type="radio" name="type" v-bind:value="t" checked
                       v-model="type">
                <label for="type">{{ t.name }}</label>
            </div>
        </form>
        <ResultGrid v-bind:required-resources="requiredResourcesNum"
                    v-bind:ready-resources="readyResourcesNum"
                    v-bind:type="type"/>
    </div>
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
