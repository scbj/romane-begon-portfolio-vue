<template>
  <ParallaxGroup class="startup-layout">
    <ParallaxLayer class="startup-layout__background" depth="back">
      <slot name="background" />
    </ParallaxLayer>
    <ParallaxLayer class="startup-layout__content" depth="base">
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

.startup-layout {
  display: grid;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;
}

.startup-layout__background,
.startup-layout__content {
  grid-column: 1/2;
  grid-row: 1/2;
}

.startup-layout__content {
  padding-top: 44vh;

  @media screen and (min-width: $extraLarge) {
    padding-top: 43vh;
  }

  @media screen and (max-height: $medium) {
    padding-top: 38vh;
  }
}
</style>
