<template>
  <div class="info">
    <h2>{{ title }}</h2>
    <div class="content" :style="last ? 'margin-left:4rem;' : ''" v-html="tekst"></div>
    <div :style="!last ? 'display:none' : ''" style="margin-top: 1rem; font-size: 110%">
      <h2>{{ t('price') }}</h2>
      <p style="font-weight: bold">{{ t('priceN') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps<{
  title: string
  tekst: string
  last?: boolean
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

.info h2 {
  color: #840f1b;
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

.content ul {
  margin-left: 2rem;
}

@media screen and (max-width: 600px) {
  .content {
    grid-template-columns: 1fr; /* Zorgt ervoor dat de paragrafen onder elkaar komen */
  }
}

@media screen and (min-width: 1200px) {
  .info {
    padding-left: 12rem;
    margin: 5rem 0;
  }
}
</style>
