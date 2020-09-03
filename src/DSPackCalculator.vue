<template>
    <v-app class="align-center d-inline-flex">
        <v-main>
            <v-responsive max-width="600 px">
                <v-container>
                    <v-row>
                        <v-col cols="2">
                            <InputForm/>
                        </v-col>
                        <v-col cols="4">
                            <ResultGrid/>
                        </v-col>
                        <v-col cols="4">
                            <PlanningBoard/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-responsive>
        </v-main>
    </v-app>
</template>

<script>
    import InputForm from './components/InputForm.vue'
    import ResultGrid from './components/ResultGrid.vue'
    import PlanningBoard from './components/PlanningBoard.vue'

    export default {
        name: 'DSPackCalculator',
        components: {
            InputForm,
            ResultGrid,
            PlanningBoard
        }
    }
</script>

<style>

</style>
