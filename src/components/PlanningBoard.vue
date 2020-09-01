<template>
    <div>
        <div v-for="b of board" :key="b.index">
            <PlanningRow v-bind:material="b.material" v-bind:packages="b.packages" v-bind:index="b.index"/>
        </div>
    </div>

</template>

<script>
    import PlanningRow from "./PlanningRow";

    export default {
        name: "PlanningBoard",
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
            PlanningRow
        }
    }
</script>

<style scoped>

</style>
