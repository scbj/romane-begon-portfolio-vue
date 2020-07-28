<template>
  <component
    :is="tag"
    class="parallax-container"
    :style="variables"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    perspective: {
      type: Number,
      default: 300
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    variables () {
      return {
        '--parallax-perspective': this.perspective
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.parallax-container {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: calc(var(--parallax-perspective) * 1px);

  scroll-snap-type: y mandatory;
}
</style>
