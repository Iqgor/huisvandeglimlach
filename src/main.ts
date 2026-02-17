import './assets/main.css'
import VueLazyload from 'vue-lazyload'
import { createI18n } from 'vue-i18n'
import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'

import en from './locales/en.json'
import nl from './locales/nl.json'
import du from './locales/du.json'
import it from './locales/it.json'

// Configuratie van Vue I18n
const i18n = createI18n({
  locale: 'nl', // Standaardtaal
  fallbackLocale: 'en', // Valt terug op Engels als vertaling ontbreekt
  messages: {
    en,
    nl,
    du,
    it,
  },
})
// Dynamically change the document title based on the current language
const defaultTitle = 'Huis van de Glimlach'
const titles: { [key: string]: string } = {
  en: 'House of the Smile',
  nl: 'Huis van de Glimlach',
  du: 'Haus des Lächelns',
  it: 'Casa del Sorriso',
}

watch(
  () => i18n.global.locale,
  (newLocale: keyof typeof titles) => {
    document.title = titles[newLocale] || defaultTitle
  },
)
const app = createApp(App)

app.use(router)

app.use(VueLazyload)

app.use(i18n)

app.mount('#app')
