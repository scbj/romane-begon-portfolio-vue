<template>
  <ParallaxGroup class="client-area-preview-layout">
    <ParallaxLayer class="client-area-preview-layout__left" depth="back">
      <slot name="left" />
    </ParallaxLayer>
    <ParallaxLayer class="client-area-preview-layout__right" depth="base">
      <slot name="right" />
    </ParallaxLayer>
  </ParallaxGroup>
</template>

<script>
import ParallaxGroup from '@/components/ParallaxGroup'
import ParallaxLayer from '@/components/ParallaxLayer'

export default {
  components: {
    ParallaxGroup,
    ParallaxLayer
  }
}
</script>

<style lang="scss" scoped>
.client-area-preview-layout {
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(500px, 50%));
  align-items: stretch;
  justify-items: stretch;
}
</style>
