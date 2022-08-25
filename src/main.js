import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home-Page'
import Approach from './components/Approach-Page'
import Estimation from './components/Estimations-Page'
import About from './components/About-Page'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "Home", component: Home, path: "/home", children: [] },
    { name: "Approach-Page", component: Approach, path: "/approach", children: [] },
    { name: "Estimations-Page", component: Estimation, path: "/estimations", children: [] },
    { name: "About-Page", component: About, path: "/about", children: [] }
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
