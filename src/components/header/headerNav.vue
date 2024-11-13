<template>
  <nav class="nav" v-if="isMenuOpen">
    <ul class="navList">
      <li><RouterLink to="/about">Over ons</RouterLink></li>
      <li><RouterLink to="/images">Foto's</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isMenuOpen: Boolean,
})
</script>
<style scoped>
.nav {
  position: absolute;
  background-color: rgba(98, 130, 93, 1);
  color: white;
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
