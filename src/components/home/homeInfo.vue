<template>
  <div class="info">
    <h2 style="color: #840f1b">{{ title }}</h2>
    <div class="content" v-html="tekst"></div>
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

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.content p {
  margin: 0;
}

@media screen and (max-width: 600px) {
  .content {
    grid-template-columns: 1fr; /* Zorgt ervoor dat de paragrafen onder elkaar komen */
  }
}

@media screen and (min-width: 1000px) {
  .info {
    padding-left: 12rem;
    margin: 5rem 0;
  }
}
</style>
