<template>
  <homeSlider :images="imagesAbove" />
  <homeInfo :title="t('welcome')" :tekst="t('tekst1')" />
  <homeSlider :images="imagesCivi" :time="10000" />
  <homeInfo :title="t('info')" :tekst="t('tekst2')" />
  <imageCarousel />
  <homeInfo :title="t('info1')" :tekst="t('tekst3')" :last="true" />

  <div class="contact">
    <h2 class="contactTitle">{{ t('contactUs') }}</h2>
    <div>
      <p class="ondertitle" v-html="t('interested')"></p>
      <a class="linkHover" href="mailto:irenebonin12@gmail.com">irenebonin12@gmail.com</a>
      <a class="linkHover" href="tel:+393455124861">+393455124861</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import homeInfo from '@/components/home/homeInfo.vue'
import homeSlider from '@/components/home/homeSlider.vue'
import imageCarousel from '@/components/imageCarousel.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Dynamisch inladen van afbeeldingen met import.meta.glob
const imagesAbove = ref<string[]>([])
const imageFilesAbove = import.meta.glob('../assets/images/above/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: { w: 1920 },
})

const loadedImagesAbove = Object.keys(imageFilesAbove).map((key) => {
  const module = imageFilesAbove[key]
  return { path: (module as { default: string }).default, name: key.split('/').pop() }
})

loadedImagesAbove.sort((a, b) => {
  const nameA = a.name ? a.name.replace(/\D/g, '') : ''
  const nameB = b.name ? b.name.replace(/\D/g, '') : ''
  return parseInt(nameA) - parseInt(nameB)
})

imagesAbove.value = loadedImagesAbove.map((image) => image.path) // Opslaan in de state

const imagesCivi = ref<string[]>([])
const imageFilesCivi = import.meta.glob('../assets/images/cividale/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: { w: 1920 },
})

const loadedImagesCivi = Object.keys(imageFilesCivi).map((key) => {
  const module = imageFilesCivi[key]
  return { path: (module as { default: string }).default, name: key.split('/').pop() }
})

loadedImagesCivi.sort((a, b) => {
  const nameA = a.name ? a.name.replace(/\D/g, '') : ''
  const nameB = b.name ? b.name.replace(/\D/g, '') : ''
  return parseInt(nameA) - parseInt(nameB)
})

imagesCivi.value = loadedImagesCivi.map((image) => image.path) // Opslaan in de state
</script>

<style scoped>
.contact {
  width: 100%;
  height: 30vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 120%;
}

@media screen and (min-width: 1000px) {
  .contact {
    padding-left: 12rem;
    margin: 5rem 0;
  }
}

.contact div {
  display: flex;
  flex-direction: column;
}

.contact div > a {
  color: #840f1b;
  width: max-content;
}

.contactTitle {
  color: #840f1b;
}
</style>
