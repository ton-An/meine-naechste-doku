import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyLoad, {})

app.mount('#app')
