import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const firebaseConfig = {
  apiKey: "AIzaSyD9RLD-_1suMnWYXCgZP0rLMHjHb9TsqLo",
  authDomain: "esp32-firebase-25a86.firebaseapp.com",
  databaseURL: "https://esp32-firebase-25a86-default-rtdb.firebaseio.com",
  projectId: "esp32-firebase-25a86",
  storageBucket: "esp32-firebase-25a86.appspot.com",
  messagingSenderId: "322404791060",
  appId: "1:322404791060:web:5f1fb08145b3d9555e4801",
  measurementId: "G-LRR45YDFK9"
};

const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const database = getDatabase(firebaseApp);
const auth = getAuth();

Vue.config.productionTip = false
let app = null;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});
