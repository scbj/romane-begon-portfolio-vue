<template>
  <component
    :is="tag"
    class="parallax-layer"
    :class="depthClass"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    depth: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    depthClass () {
      return {
        'parallax__layer--back': this.depth === 'back',
        'parallax__layer--base': this.depth === 'base',
        'parallax__layer--fore': this.depth === 'fore'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';

.parallax-layer {
  position: relative;
}

.parallax__layer--back {
  @include move-forward(0);
  z-index: 3;
}

.parallax__layer--base {
  @include move-forward(45);
  z-index: 2;
}

.parallax__layer--fore {
  @include move-forward(90);
  z-index: 1;
}
</style>
