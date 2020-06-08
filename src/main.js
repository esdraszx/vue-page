import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Projects from './views/Projects.vue'
import Home from './views/Home.vue'
// import Contact from './views/Contact.vue'
import About from './views/About.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const route = [
  { path:'/', name:'Home', component: Home },
  { path:'/project', name:'Projects', component: Projects },
  { path:'/about', name:'About', component: About },
  // { path:'/contact', name:'Contact', component: Contact }
];

const router = new VueRouter ({ routes: route, mode: 'history' });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


