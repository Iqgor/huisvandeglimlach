<template>
  <div class="headerTopper" :style="{ opacity: headerOpacity }">
    <header class="header">
      <h1 :class="{ active: isActiveRoute('/') }" class="headerTitle">
        <RouterLink to="/">Casa del sorriso</RouterLink>
      </h1>
      <headerNav1 />
      <headerMenu @menuClick="showMenu" />
    </header>
    <transition name="slide">
      <headerNav :isMenuOpen="isMenuOpen" />
    </transition>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import headerMenu from './header/headerMenu.vue'
import headerNav from './header/headerNav.vue'
import headerNav1 from './header/headerNav1.vue'

const isMenuOpen = ref(false)
const headerOpacity = ref('1') // Start met volledige zichtbaarheid
let lastScrollTop = window.scrollY // Houd de vorige scrollpositie bij

const route = useRoute()

// Controleert of de huidige route overeenkomt met een bepaalde path
function isActiveRoute(path: string): boolean {
  return route.path === path
}

const showMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Scroll functie om richting en opacity aan te passen
const handleScroll = () => {
  const scrollTop = window.scrollY

  // Controleer de scrollrichting
  if (scrollTop > lastScrollTop) {
    // Naar beneden scrollen
    headerOpacity.value = '0.5'
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
  background: white;
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.headerTitle {
  font-size: 175%;
  text-transform: uppercase;
}

.headerTitle a {
  color: #840f1b !important;
}

.headerTopper {
  position: fixed;
  width: 100%;
  transition: 0.25s all;
  z-index: 1;
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
