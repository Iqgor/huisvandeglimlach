<template>
  <homeSlider :images="imagesAbove" />
  <homeInfo :title="'Welkom ;-)'" :tekst="tekst.tekst1" />
  <homeSlider :images="imagesCivi" />
  <homeInfo :title="'Omgeving'" :tekst="tekst.tekst2" />
  <imageCarousel />
  <div class="homeContact">
    <contactForm />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import homeInfo from '@/components/home/homeInfo.vue'
import contactForm from '@/components/contactForm.vue'
import homeSlider from '@/components/home/homeSlider.vue'
import imageCarousel from '@/components/imageCarousel.vue'

import image1 from '@/assets/images/above/foto1.webp'
import image2 from '@/assets/images/above/foto2.webp'
import image3 from '@/assets/images/above/foto3.webp'
import image4 from '@/assets/images/cividale/foto4.webp'
import image5 from '@/assets/images/cividale/foto5.webp'
import image6 from '@/assets/images/cividale/foto6.webp'

import tekst from '@/assets/text.json'

// Zet de afbeeldingen in een array
const imagesAbove = ref([image1, image2, image3])
const imagesCivi = ref([image4, image5, image6])
</script>

<style scoped>
.homeContact {
  width: 100%;
  height: 70vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
