<template>
  <div class="images" style="height: 100%; width: 100%">
    <div>
      <RouterLink class="linkHover" to="/">{{ t('back') }}</RouterLink>
      <h1>{{ t('photos') }}</h1>
    </div>
    <div class="imageWrapper">
      <img
        v-for="(path, index) in imagePaths"
        :key="index"
        :src="path"
        :alt="'Image ' + (index + 1)"
        @click="openImage(index)"
      />
    </div>
    <ImageModal
      :currentIndex="currentIndex"
      :images="imagePaths"
      v-if="showModal"
      @close="showModal = false"
    />
    <button v-if="showScrollButton" class="scroll-to-top" @click="scrollToTop">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<script lang="ts">
import ImageModal from '@/components/imageModal.vue'
import { useI18n } from 'vue-i18n'

export default {
  data() {
    return {
      imagePaths: [] as string[],
      showModal: false, // Boolean om de modal te tonen
      currentIndex: 0, // Huidige index van de afbeelding
      showScrollButton: false, // Boolean to show the scroll-to-top button
    }
  },
  components: {
    ImageModal,
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  async created() {
    const images = import.meta.glob('../assets/images/huis/*.{png,jpg,jpeg,webp}', {
      eager: true,
      query: { w: 1920 },
    }) // Update pad naar je map

    const loadedImages = Object.keys(images).map((key) => {
      const module = images[key]
      return { path: (module as { default: string }).default, name: key.split('/').pop() }
    })

    // Sort images by name
    loadedImages.sort((a, b) => {
      const nameA = a.name ? a.name.replace(/\D/g, '') : ''
      const nameB = b.name ? b.name.replace(/\D/g, '') : ''
      return parseInt(nameA) - parseInt(nameB)
    })

    this.imagePaths = loadedImages.map((image) => image.path) // Opslaan in de state

    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    openImage(index: number) {
      this.showModal = true
      this.currentIndex = index
    },
    handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      this.showScrollButton = scrollPosition > pageHeight / 5
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
<style scoped>
.images {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.imageWrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-auto-rows: 25rem;
}

@media screen and (min-width: 600px) {
  .imageWrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1000px) {
  .imageWrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}

.imageWrapper img {
  object-fit: cover;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  cursor: pointer;
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: #840f1b;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  font-size: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: 0.5s all;
}

.scroll-to-top:active {
  transform: translateY(-1rem);
}

@media screen and (min-width: 600px) {
  .scroll-to-top {
    display: none;
  }
}
</style>
