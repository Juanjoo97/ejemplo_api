import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)




const firebaseConfig ={
    apiKey: "AIzaSyArbh_pR2QGp4F2n9O_KY9V7ZXGDSRJ5PI",
    authDomain: "app-proyecto2021.firebaseapp.com",
    projectId: "app-proyecto2021",
    storageBucket: "app-proyecto2021.appspot.com",
    messagingSenderId: "309683848510",
    appId: "1:309683848510:web:d47820fac860f9a26cd86f",
    databaseURL: "https://app-proyecto2021-default-rtdb.firebaseio.com/"

};
const ap = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(ap);


Vue.config.productionTip = false
let app=null
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, () => {
  if (!app) {
    app= new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
  }
});

