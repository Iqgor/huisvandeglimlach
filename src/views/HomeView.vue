<template>
  <img class="fixedImg" src="../assets/images/pexels-photo-2581922.jpeg" alt="" />
  <homeSlider />
  <homeInfo />
  <div class="homeContact">
    <contactForm />
  </div>
</template>
<script setup lang="ts">
import homeSlider from '@/components/home/homeSlider.vue'
import homeInfo from '@/components/home/homeInfo.vue'
import contactForm from '@/components/contactForm.vue'
</script>
<style scoped>
.fixedImg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}
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
