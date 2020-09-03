<template>
    <v-card>
        <v-card-text>
            <div>{{ material.name }}</div>
            <div v-for="p of packages" :key="p.size">
                {{ p.amount }} ({{p.volumeMarker}}): {{p.count}}
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="onClick" class="error">—</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "PlanningTask",
        props: {
            index: Number,
            packages: Array,
            material: Object
        },
        methods: {
            onClick() {
                this.$store.commit("dropPackage", this.index)
            }
        }
    }
</script>

<style scoped>

</style>
