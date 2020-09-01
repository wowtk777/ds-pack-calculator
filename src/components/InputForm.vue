<template>
    <v-form>
        <v-text-field label="Необходимое количество" v-model="requiredResources"/>
        <v-text-field label="Существующее количество" v-model="readyResources"/>

        <v-radio-group v-model="material">
            <v-radio v-for="t of materials" :key="t.name" :label="t.name" :value="t"></v-radio>
        </v-radio-group>
    </v-form>
</template>

<script>
    import {materials} from "./materials";

    export default {
        name: 'InputForm',
        data: function () {
            return {
                materials
            }
        },
        computed: {
            requiredResources: {
                get() {
                    return this.$store.getters.requiredResources
                },
                set(requiredResources) {
                    requiredResources = parseInt(requiredResources)
                    this.$store.commit('updateForm', {requiredResources})
                }
            },
            readyResources: {
                get() {
                    return this.$store.getters.readyResources
                },
                set(readyResources) {
                    readyResources = parseInt(readyResources)
                    this.$store.commit('updateForm', {readyResources})
                }
            },
            material: {
                get() {
                    return this.$store.getters.material
                },
                set(material) {
                    this.$store.commit('updateForm', {material})
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
