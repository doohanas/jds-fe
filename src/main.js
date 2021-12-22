import Vue from 'vue'
import App from './App.vue'
import axios from './plugins/axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
