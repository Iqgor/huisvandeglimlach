<template>
  <figure class="imageSlider">
    <div
      class="slider-track"
      :style="{
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
      }"
      @transitionend="handleTransitionEnd"
    >
      <!-- Afbeeldingen + duplicaat -->
      <img
        v-for="(image, key) in loopedImages"
        :key="key"
        class="slider-image"
        :src="image"
        alt="background img"
        v-lazy="image"
      />
    </div>
  </figure>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{
  images: string[]
  time?: number
}>()

// Maak een array met een duplicaat van de eerste afbeelding
const loopedImages = computed(() => [...props.images, props.images[0]])

// Huidige index voor de slider
const currentIndex = ref(0)
const isTransitioning = ref(true)

// Interval voor het wisselen van afbeeldingen
let intervalId: number | null = null

onMounted(() => {
  intervalId = setInterval(
    () => {
      currentIndex.value++
    },
    props.time ? props.time : 15000,
  ) // Wissel elke 3 seconden
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

// Handler wanneer de overgang eindigt
function handleTransitionEnd() {
  if (currentIndex.value >= props.images.length) {
    // Als we bij de duplicaat zijn, spring onzichtbaar terug naar de eerste afbeelding
    isTransitioning.value = false
    currentIndex.value = 0

    // Na het instellen van de nieuwe positie, herstel de overgang
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true
      })
    })
  }
}
</script>
<style scoped>
.imageSlider {
  width: 100%;
  height: 50vh;
  overflow: hidden;
  position: relative;
}

@media screen and (min-width: 768px) {
  .imageSlider {
    height: 80vh;
  }
}

.slider-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
