<template>
  <nav class="nav" v-if="isMenuOpen">
    <ul class="navList">
      <li :class="{ active: isActiveRoute('/about') }">
        <RouterLink to="/about">Over ons</RouterLink>
      </li>
      <li :class="{ active: isActiveRoute('/images') }">
        <RouterLink to="/images">Foto's</RouterLink>
      </li>
      <li :class="{ active: isActiveRoute('/contact') }">
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

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
