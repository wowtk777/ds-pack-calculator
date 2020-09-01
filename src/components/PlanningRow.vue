<template>
    <div>
        {{ material.name }}
        <v-list>
            <v-list-item v-for="p of packages" :key="p.size">
                {{ p.amount }} ({{p.marker}}): {{p.count}}
            </v-list-item>
        </v-list>
        <v-btn @click="onClick" class="error">—</v-btn>
    </div>
</template>

<script>
    export default {
        name: "PlanningRow",
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
