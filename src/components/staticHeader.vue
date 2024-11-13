<template>
  <div class="headerTopper" :style="{ opacity: headerOpacity }">
    <header class="header">
      <headerMenu @menuClick="showMenu" />
      <h1 class="headerTitle"><RouterLink to="/">Huis van de glimlach</RouterLink></h1>
    </header>
    <transition name="slide">
      <headerNav :isMenuOpen="isMenuOpen" />
    </transition>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import headerMenu from './header/headerMenu.vue'
import headerNav from './header/headerNav.vue'

const isMenuOpen = ref(false)
const headerOpacity = ref('1') // Start met volledige zichtbaarheid
let lastScrollTop = window.scrollY // Houd de vorige scrollpositie bij

const showMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Scroll functie om richting en opacity aan te passen
const handleScroll = () => {
  const scrollTop = window.scrollY

  // Controleer de scrollrichting
  if (scrollTop > lastScrollTop) {
    // Naar beneden scrollen
    headerOpacity.value = '0.25'
  } else {
    // Naar boven scrollen
    headerOpacity.value = '1'
  }

  lastScrollTop = scrollTop // Update de laatste scrollpositie
}

// Voeg scroll-eventlistener toe bij het laden van de component
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Verwijder de eventlistener bij het verlaten van de component
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
header {
  background-color: rgba(98, 130, 93, 1);
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7rem;
}

.headerTitle {
  font-size: 175%;
  font-family: 'Gluten', cursive;
}

.headerTopper {
  position: fixed;
  width: 100%;
  transition: 0.25s all;
}
.headerTopper:hover {
  opacity: 100% !important ;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.75s ease-in-out;
}

.slide-enter-from {
  transform: translateX(-150%);
}

.slide-leave-to {
  transform: translateX(-150%);
}
</style>
