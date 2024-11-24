<template>
  <nav class="nav" v-if="isMenuOpen">
    <ul class="navList">
      <!-- <li @click="handleClick" :class="{ active: isActiveRoute('/about') }">
        <RouterLink to="/about">{{ t('about') }}</RouterLink>
      </li> -->
      <li @click="handleClick" :class="{ active: isActiveRoute('/images') }">
        <RouterLink to="/images">{{ t('photos') }}</RouterLink>
      </li>
      <!-- <li @click="handleClick" :class="{ active: isActiveRoute('/contact') }">
        <RouterLink to="/contact">{{ t('contact') }}</RouterLink>
      </li> -->
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const emit = defineEmits(['menuClick'])

const { t } = useI18n()

// Methode om het klik event af te handelen en door te sturen
const handleClick = () => {
  emit('menuClick')
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
  font-size: 125%;
}
</style>
