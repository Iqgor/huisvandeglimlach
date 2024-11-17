<template>
  <nav class="navHeader">
    <ul class="navHeaderList">
      <li :class="{ active: isActiveRoute('/about') }">
        <RouterLink class="linkHover" to="/about">Over ons</RouterLink>
      </li>
      <li :class="{ active: isActiveRoute('/images') }">
        <RouterLink class="linkHover" to="/images">Foto's</RouterLink>
      </li>
      <li :class="{ active: isActiveRoute('/contact') }">
        <RouterLink class="linkHover" to="/contact">Contact</RouterLink>
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
</script>
<style scoped>
.navHeader {
  display: none;
}

@media screen and (min-width: 768px) {
  .navHeader {
    display: block;
  }
}

.navHeaderList {
  list-style-type: none;
  display: flex;
  gap: 2rem;
  width: 100%;
  font-size: 125%;
}
</style>
