<template>
    <div>
        <div v-for="b of board" :key="b.index" class="d-inline">
            <PlanningTask v-bind:material="b.material" v-bind:packages="b.packages" v-bind:index="b.index"/>
        </div>
    </div>
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
