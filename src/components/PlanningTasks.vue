<template>
    <div>
        <div v-for="b of board" :key="b.index">
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
                let result = this.$store.state.board.map((p, index) => {
                    return {index, ...p}
                })
                console.log("packages on board: %s", JSON.stringify(result))
                return result
            }
        },
        components: {
            PlanningTask
        }
    }
</script>

<style scoped>

</style>
