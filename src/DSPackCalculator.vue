<template>
    <v-app class="align-center d-inline-flex">
        <v-main>
            <v-responsive max-width="600 px">
                <v-container class="input-form">
                    <v-row>
                        <v-col cols="2">
                            <InputForm/>
                        </v-col>
                        <v-col cols="auto">
                            <ResultGrid/>
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

    export default {
        name: 'DSPackCalculator',
        components: {
            InputForm,
            ResultGrid
        }
    }
</script>

<style>

</style>
