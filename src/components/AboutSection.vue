<template>
  <Intersect :treshold="[0.1, 0.5, 0.9]" @enter="onEnter">
    <ParallaxGroup class="about-section" />
  </Intersect>
</template>

<script>
import Intersect from 'vue-intersect'

import ParallaxGroup from '@/components/ParallaxGroup'

export default {
  components: {
    Intersect,
    ParallaxGroup
  },

  methods: {
    onEnter (entry) {
      if (entry[0].intersectionRatio > 0.2) {
        this.$emit('visible')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about-section {
  background: white;
  min-height: 100vh;
}
</style>
