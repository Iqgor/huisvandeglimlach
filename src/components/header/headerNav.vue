<template>
  <nav class="nav" v-if="isMenuOpen">
    <ul class="navList">
      <li @click="handleClick" :class="{ active: isActiveRoute('/images') }">
        <RouterLink to="/images">{{ t('photos') }}</RouterLink>
      </li>
    </ul>
    <div class="language-switcher">
      <span @click="changeLanguage('en')"><span class="fi fi-gb"></span></span>
      <span @click="changeLanguage('nl')"><span class="fi fi-nl"></span></span>
      <span @click="changeLanguage('du')"><span class="fi fi-de"></span></span>
      <span @click="changeLanguage('it')"><span class="fi fi-it"></span></span>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const emit = defineEmits(['menuClick'])

const { t, locale } = useI18n()

// Methode om het klik event af te handelen en door te sturen
const handleClick = () => {
  emit('menuClick')
}

const changeLanguage = (lang: string) => {
  locale.value = lang
}

// Controleert of de huidige route overeenkomt met een bepaalde path
function isActiveRoute(path: string): boolean {
  return route.path === path
}

defineProps({
  isMenuOpen: Boolean,
})
</script>
<style scoped>
.nav {
  position: absolute;
  background-color: white;
  color: black;
  width: 100%;
  padding: 1rem;
}

.navList {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 175%;
}
.navList a {
  font-weight: bold;
  text-transform: uppercase;
}
.language-switcher {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  font-size: 130%;
}
</style>
