<template>
  <img
    v-if="source"
    :src="source"
    :alt="alt"
    class="base-image"
    :class="{'base-image--loaded': source}"
  >
  <div
    v-else
    class="base-image"
    :class="{'base-image--pending': !source}"
  />
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: ''
    },
    background: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      source: ''
    }
  },

  watch: {
    src: {
      immediate: true,
      async handler (src) {
        if (await this.preloadImage(src)) {
          this.source = src
        }
      }
    }
  },

  methods: {
    preloadImage (src) {
      return new Promise((resolve, reject) => {
        if (!src) return resolve(false)
        const image = new Image()
        image.onload = () => resolve(true)
        image.onerror = () => resolve(false)
        image.src = src
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.base-image--pending {
  $color: #f7f7f7;
  background: linear-gradient(
    to right,
    $color 0%,
    $color 30%,
    darken($color, 3%) 50%,
    $color 70%,
    $color 100%
  );
  background-size: 300% 100%;
  background-position-x: 100%;
  animation: gradient 1.2s ease-out infinite;
}

@keyframes gradient {
  0% {
    background-position-x: 100%
  }
  100% {
    background-position-x: 0%
  }
}
</style>
