import { createApp } from 'vue/dist/vue.esm-bundler.js'; // Cambia esta línea
import './bootstrap';
import HolaMundo from './components/HolaMundo.vue';

const app = createApp({});
app.component('hola-mundo', HolaMundo);
app.mount('#app');