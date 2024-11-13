<script setup lang="ts">
import { RouterView } from 'vue-router'
import staticHeader from '@/components/staticHeader.vue'
</script>

<template>
  <staticHeader />
  <main class="main">
    <RouterView />
  </main>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
</style>
