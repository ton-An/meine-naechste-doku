import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'

import App from './App.vue'
import i18n from './i18n/i18n'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyLoad, {})
app.use(i18n)

app.mount('#app')
