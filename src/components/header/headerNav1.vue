<template>
  <nav class="navHeader">
    <ul class="navHeaderList">
      <!-- <li :class="{ active: isActiveRoute('/about') }">
        <RouterLink class="linkHover" to="/about">{{ t('about') }}</RouterLink>
      </li> -->
      <li :class="{ active: isActiveRoute('/images') }">
        <RouterLink class="linkHover" to="/images">{{ t('photos') }}</RouterLink>
      </li>
      <!-- <li :class="{ active: isActiveRoute('/contact') }">
        <RouterLink class="linkHover" to="/contact">{{ t('contact') }}</RouterLink>
      </li> -->
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
