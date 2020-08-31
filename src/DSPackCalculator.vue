<template>
    <v-app class="align-center d-inline-flex">
        <v-main>
            <v-responsive max-width="600 px">
                <InputForm/>
            </v-responsive>
        </v-main>
    </v-app>
</template>

<script>
    import InputForm from './components/InputForm.vue'

    export default {
        name: 'DSPackCalculator',
        components: {
            InputForm
        }
    }
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
