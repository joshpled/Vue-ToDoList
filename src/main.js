import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'hover.css'
import '@fortawesome/fontawesome-free/js/all.js';
import './assets/css/ToDoList.css'

createApp(App).use(router).mount('#app')