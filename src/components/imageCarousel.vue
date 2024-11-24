<template>
  <div class="carousel">
    <button @click="prevSlide" aria-label="Previous slide">
      <svg
        fill="white"
        width="5rem"
        height="5rem"
        class="modal-button"
        viewBox="-128 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          ></path>
        </g>
      </svg>
    </button>
    <div class="carousel-track-container">
      <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <li
          @click="openImage(index)"
          class="carousel-slide"
          v-for="(image, index) in images"
          :key="index"
        >
          <img :src="image" alt="Image" v-lazy="image" />
        </li>
      </ul>
    </div>
    <button @click="nextSlide" aria-label="Next slide">
      <svg
        fill="white"
        width="5rem"
        height="5rem"
        class="modal-button"
        viewBox="-128 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          ></path>
        </g>
      </svg>
    </button>
    <imageModal
      :currentIndex="currentIndex"
      :images="images"
      v-if="showModal"
      @close="showModal = false"
    />
  </div>
</template>

<script lang="ts">
import imageModal from '@/components/imageModal.vue'

import image1 from '@/assets/images/carousel/image1.webp'
import image2 from '@/assets/images/carousel/image2.webp'
import image3 from '@/assets/images/carousel/image3.webp'
import image4 from '@/assets/images/carousel/image4.webp'
import image5 from '@/assets/images/carousel/image5.webp'
import image6 from '@/assets/images/carousel/image6.webp'
import image7 from '@/assets/images/carousel/image7.webp'
import image8 from '@/assets/images/carousel/image8.webp'
import image9 from '@/assets/images/carousel/image9.webp'
export default {
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6, image7, image8, image9],
      currentSlide: 0,
      showModal: false,
      currentIndex: 0,
    }
  },
  components: {
    imageModal,
  },

  methods: {
    openImage(index: number) {
      this.showModal = true
      this.currentIndex = index
    },
    nextSlide() {
      if (window.innerWidth > 768) {
        // Alleen op grotere schermen
        this.currentSlide = (this.currentSlide + 1) % Math.ceil(this.images.length / 3)
      }
    },
    prevSlide() {
      if (window.innerWidth > 768) {
        // Alleen op grotere schermen
        this.currentSlide =
          (this.currentSlide - 1 + Math.ceil(this.images.length / 3)) %
          Math.ceil(this.images.length / 3)
      }
    },
  },
}
</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: 0.5s all;
  list-style: none;
  height: 100%;
  gap: 1rem;
}

.carousel-slide {
  min-width: 33.3%;
  box-sizing: border-box;
  cursor: pointer;
}

.carousel-slide img {
  width: 100%;
  display: block;
  border-radius: 0.5rem;
  object-fit: cover;
  height: 100%;
}

button {
  background: none;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: white;
  transition: 0.25s color;
  display: none;
}

.carousel-track-container {
  padding: 0 1rem; /* Pas de hoogte aan indien nodig */
}

button:nth-of-type(1) {
  left: 10px;
}

button:nth-of-type(2) {
  right: 10px;
}

@media screen and (max-width: 768px) {
  .carousel-track-container {
    height: 30vh; /* Pas de hoogte aan indien nodig */
  }

  .carousel-track {
    gap: 0.5rem; /* Maak de gap kleiner voor mobiel */
    overflow: auto;
  }

  .carousel-slide {
    min-width: 80%; /* Laat één slide duidelijk in beeld zien */
  }
}

@media screen and (min-width: 768px) {
  button {
    display: block;
  }
  button:hover svg {
    fill: #840f1b;
  }
  button svg {
    transition: 0.25s all;
  }
  .carousel-track-container {
    height: 30vh;
  }
}
</style>
