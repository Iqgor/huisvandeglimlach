<template>
  <div class="contactForm">
    <h2 class="contactTitle">{{ t('contactUs') }}</h2>
    <p class="ondertitle" v-html="t('interested')"></p>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style scoped>
.contactForm {
  width: 35rem;
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* color: black; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.contactTitle {
  font-size: 2rem;
  text-align: center;
}

.ondertitle {
  margin-bottom: 2rem;
}
</style>
