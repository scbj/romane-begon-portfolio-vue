<template>
  <ParallaxGroup class="prestation-preview-layout">
    <ParallaxLayer class="prestation-preview-layout__background" depth="back">
      <slot name="background" />
    </ParallaxLayer>
    <ParallaxLayer class="prestation-preview-layout__content" depth="base">
      <slot name="content" />
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
@import '@/assets/styles/_vars.scss';

.prestation-preview-layout {
  display: grid;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;
}

.prestation-preview-layout__background,
.prestation-preview-layout__content {
  grid-column: 1/2;
  grid-row: 1/2;
}
</style>
