import './assets/style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/routing.js";
import 'leaflet/dist/leaflet.css';


const app = createApp(App);
app.use(router);
app.mount('#app');