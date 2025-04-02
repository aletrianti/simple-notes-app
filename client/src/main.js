import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(
        Vue3Toastify,
        { autoClose: 3000 }
    )
    .mount('#app')
