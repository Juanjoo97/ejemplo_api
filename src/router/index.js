import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Verification from '../views/Auth/Verification.vue'
import { getAuth } from "firebase/auth";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Verification',
    name: 'Verification',
    component: Verification
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
        requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
});


router.beforeEach((to,from,next) => {
  if (to.matched.some(ruta => ruta.meta.requiresAuth)){
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'Login'
      })
    }
  } else{
    next();
  }
})

export default router;
