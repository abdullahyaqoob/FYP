import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import './assets/maid'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// import { from } from 'core-js/fn/array'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')