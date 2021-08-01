import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'quasar/dist/quasar.umd'
import 'material-icons'
import 'quasar/dist/quasar.css'
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),router
}).$mount('#app')
