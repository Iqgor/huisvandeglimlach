<template>
  <div class="carousel">
    <button @click="prevSlide">‹</button>
    <div class="carousel-track-container">
      <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <li class="carousel-slide" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Image" />
        </li>
      </ul>
    </div>
    <button @click="nextSlide">›</button>
  </div>
</template>

<script lang="ts">
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
      slideInterval: null as number | null,
    }
  },
  mounted() {
    this.startSlideShow()
  },
  beforeUnmount() {
    if (this.slideInterval !== null) {
      clearInterval(this.slideInterval)
    }
  },
  methods: {
    startSlideShow() {
      this.slideInterval = setInterval(this.nextSlide, 20000)
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % Math.ceil(this.images.length / 3)
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + Math.ceil(this.images.length / 3)) %
        Math.ceil(this.images.length / 3)
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

.carousel-track-container {
  overflow: hidden;
  width: 100%;
  height: 30vh;
}

.carousel-track {
  display: flex;
  transition: transform 0.75s ease-in-out;
  list-style: none;
  height: 100%;
  gap: 1rem;
}

.carousel-slide {
  min-width: 33.33%;
  box-sizing: border-box;
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
}

button:hover {
  color: #840f1b;
}

button:nth-of-type(1) {
  left: 10px;
}

button:nth-of-type(2) {
  right: 10px;
}
</style>
