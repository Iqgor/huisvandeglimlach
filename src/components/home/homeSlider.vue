<template>
  <div class="mainFig">
    <div class="slider-container">
      <div class="slider-track">
        <div class="slider-image" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`Slide ${index + 1}`" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// Importeer je afbeeldingen
import image1 from '@/assets/images/Placeholder-_-Glossary.svg'
import image2 from '@/assets/images/pexels-photo-2581922.jpeg'
import image3 from '@/assets/images/Placeholder-_-Glossary.svg'

// Zet de afbeeldingen in een array
const images = ref([image1, image2, image3])
</script>

<style scoped>
.mainFig {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.slider-container {
  width: 100%;
  height: 25%;
  margin-bottom: 4rem;
  overflow: hidden;
  overflow-x: auto;
}

.slider-track {
  display: flex;
  gap: 4rem;
  flex-shrink: 0;
  padding: 1rem;
  height: 100%;
  width: max-content;
}
.slider-track::-webkit-scrollbar {
  display: none;
}

.slider-image {
  display: inline-block;
  height: 100%;
}

.slider-image img {
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>
