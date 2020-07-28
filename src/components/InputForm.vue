<template>
    <div class="input-form">
        <form>
            <label for="required-resources">Необходимое количество</label>
            <input id="required-resources" v-model="requiredResources" type="text"/>
            <br/>
            <label for="ready-resources">Существующее количество</label>
            <input id="ready-resources" v-model="readyResources" type="text"/>
        </form>
        <ResultGrid v-bind:required-resources="requiredResourcesNum"
                    v-bind:ready-resources="readyResourcesNum"
                    :type="50"/>
    </div>
</template>

<script>
    import ResultGrid from "./ResultGrid";

    export default {
        name: 'InputForm',
        data: function () {
            return {
                requiredResources: 0,
                readyResources: 0,
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
