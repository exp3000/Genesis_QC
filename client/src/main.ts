import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
//style sheet import
import 'vuetify/dist/vuetify.min.css' 
import store from '@/store/store'



//use the created panel as a global since it is used everywhere
import Panel from '@/components/Panel.vue';

Vue.component('panel', Panel)

Vue.use(Vuetify)

sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
