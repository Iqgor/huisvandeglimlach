<template>
  <homeSlider :images="imagesAbove" />
  <homeInfo :title="t('welcome')" :tekst="t('tekst1')" />
  <homeSlider :images="imagesCivi" :time="10000" />
  <homeInfo :title="t('info')" :tekst="t('tekst2')" />
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

import image1 from '@/assets/images/above/foto1.webp?w=1920'
import image2 from '@/assets/images/above/foto2.webp?w=1920'
import image3 from '@/assets/images/above/foto3.webp?w=1920'
import image4 from '@/assets/images/cividale/foto4.webp?w=1920'
import image5 from '@/assets/images/cividale/foto5.webp?w=1920'
import image6 from '@/assets/images/cividale/foto6.webp?w=1920'
import image7 from '@/assets/images/cividale/foto7.webp?w=1920'
import image8 from '@/assets/images/cividale/foto8.webp?w=1920'
import image9 from '@/assets/images/cividale/foto9.webp?w=1920'
import image10 from '@/assets/images/cividale/foto10.jpeg?w=1920'
import image11 from '@/assets/images/cividale/foto11.jpeg?w=1920'
import image12 from '@/assets/images/cividale/foto12.jpeg?w=1920'
import image13 from '@/assets/images/cividale/foto13.jpeg?w=1920'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Zet de afbeeldingen in een array
const imagesAbove = ref([image1, image2, image3])
const imagesCivi = ref([
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
])
</script>

<style scoped>
.homeContact {
  width: 100%;
  height: 50vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
