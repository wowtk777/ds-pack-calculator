import Vue from 'vue'
import DSPackCalculator from './DSPackCalculator.vue'
import vuetify from './plugins/vuetify';
import store from "./components/store";

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    render: h => h(DSPackCalculator)
}).$mount('#app')
