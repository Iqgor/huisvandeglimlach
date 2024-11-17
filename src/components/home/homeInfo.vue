<template>
  <div class="info">
    <h2 style="color: #840f1b">{{ title }}</h2>
    <div v-html="tekst"></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  tekst: string
}>()
</script>
<style scoped>
.info {
  width: 100%;
  background: rgba(255, 255, 255); /* Zorgt voor een volledig transparante achtergrond */
  font-size: 2rem;
  padding: 2rem;
  color: #333;
}

@media screen and (min-width: 1000px) {
  .info {
    padding-left: 12rem;
    margin: 5rem 0;
  }
}
</style>
