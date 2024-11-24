import './assets/main.css'
import VueLazyload from 'vue-lazyload'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import en from './locales/en.json'
import nl from './locales/nl.json'
import du from './locales/du.json'

// Configuratie van Vue I18n
const i18n = createI18n({
  locale: 'nl', // Standaardtaal
  fallbackLocale: 'en', // Valt terug op Engels als vertaling ontbreekt
  messages: {
    en,
    nl,
    du,
  },
})

const app = createApp(App)

app.use(router)

app.use(VueLazyload)

app.use(i18n)

app.mount('#app')
