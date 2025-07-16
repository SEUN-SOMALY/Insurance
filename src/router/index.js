import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Products from '../view/Products.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }, // ✅ use lowercase here
  { path: '/products', component: Products}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
