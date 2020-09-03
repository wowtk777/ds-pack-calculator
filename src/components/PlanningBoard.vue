<template>
    <v-container>
        <v-row>
            <PlanningTasks/>
        </v-row>
        <v-row>
            <PlanningResume/>
        </v-row>
    </v-container>
</template>

<script>
    import PlanningTasks from "./PlanningTasks";
    import PlanningResume from "./PlanningResume";

    export default {
        name: "PlanningBoard",
        components: {
            PlanningTasks,
            PlanningResume
        }
    }
</script>

<style scoped>

</style>
