<template>
    <v-container>
        <PlanningTask v-for="b of board"
                      :key="b.index"
                      v-bind:material="b.material"
                      v-bind:packages="b.packages"
                      v-bind:index="b.index"/>
    </v-container>
</template>

<script>
    import PlanningTask from "./PlanningTask";

    export default {
        name: "PlanningTasks",
        computed: {
            board() {
                return  this.$store.state.board.map((p, index) => {
                    return {index, ...p}
                })
            }
        },
        components: {
            PlanningTask
        }
    }
</script>

<style scoped>

</style>
