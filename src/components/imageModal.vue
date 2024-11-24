<template>
  <div class="modal-overlay">
    <button class="modal-buttons" @click="prevImage">
      <svg
        fill="#000000"
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
    <div class="modal-content" @click.stop>
      <img :src="makeImagesrc(newIndex) as string" class="modal-image" />
      <button class="close-button" @click="closeModal">
        <svg
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Close_SM">
              <path
                id="Vector"
                d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <p style="margin-top: 1rem">{{ t('photo') }} {{ newIndex + 1 }} / {{ images.length }}</p>
    </div>
    <button @click="nextImage" class="modal-buttons">
      <svg
        fill="#000000"
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
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'ImageModal',
  props: {
    currentIndex: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  emits: ['close'],
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      isVisible: true,
      newIndex: this.currentIndex,
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    makeImagesrc(index: number) {
      return this.images[index]
    },
    handleKeydown(event: { key: string }) {
      if (event.key === 'Escape') {
        this.closeModal()
      } else if (event.key === 'ArrowLeft') {
        this.prevImage()
      } else if (event.key === 'ArrowRight') {
        this.nextImage()
      }
    },
    closeModal() {
      this.$emit('close')
    },
    prevImage() {
      if (this.newIndex > 0) {
        this.newIndex -= 1
      } else {
        this.newIndex = this.images.length - 1
      }
    },
    nextImage() {
      if (this.newIndex < this.images.length - 1) {
        this.newIndex += 1
      } else {
        this.newIndex = 0
      }
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  z-index: 4;
}

.modal-content {
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 90%;
}

.modal-image {
  max-height: 90vh;
  object-fit: contain;
  width: 100%;
  border-radius: 0.25rem;
}

.modal-buttons {
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.modal-button {
  fill: black;
  transition: 0.25s all;
}
.modal-button:hover {
  fill: #840f1b;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  border: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 100%;
  transition: 0.25s all;
}
.close-button:hover {
  background-color: #840f1b;
}

.close-button:hover svg {
  fill: white;
}
</style>
