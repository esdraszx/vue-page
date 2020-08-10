import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Algorithm from './views/Algorithm.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
// import Contact from './views/Contact.vue'
//import About from './views/About.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const route = [
  { path:'/', name:'Home', component: Home },
  { path:'/algorithm', name:'Algorithm', component: Algorithm },
  // { path:'/about', name:'About', component: About },
  // { path:'/contact', name:'Contact', component: Contact }
  { path:'*', name: '404', component: NotFound}
];

const router = new VueRouter ({ routes: route, mode: 'history' });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


