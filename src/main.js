import Vue from 'vue'
import DSPackCalculator from './DSPackCalculator.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(DSPackCalculator)
}).$mount('#app')
