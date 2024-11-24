<template>
  <div class="nav-container">
    <input
      id="hamburger"
      class="checkbox"
      type="checkbox"
      :checked="props.isMenuOpen"
      @click="handleClick"
    />
    <label for="hamburger" class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </label>
  </div>
</template>
<script setup lang="ts">
// Defineer een event die uitgestuurd wordt bij een klik
const emit = defineEmits(['menuClick'])
const props = defineProps<{ isMenuOpen: boolean }>()
// Methode om het klik event af te handelen en door te sturen
const handleClick = () => {
  emit('menuClick')
}
</script>
<style scoped>
.nav-container {
  display: block;
  position: relative;
}

@media screen and (min-width: 768px) {
  .nav-container {
    display: none;
  }
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 0;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: black;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type='checkbox']:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}
</style>
