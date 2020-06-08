<template>
  <ParallaxGroup class="client-area-preview-layout">
    <ParallaxLayer class="client-area-preview-layout__background" depth="back">
      <slot name="background" />
    </ParallaxLayer>
    <ParallaxLayer class="client-area-preview-layout__content" depth="base">
      <slot name="left" />
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
@import '@/assets/styles/_vars.scss';

.client-area-preview-layout {
  display: grid;
  align-items: stretch;
  justify-content: stretch;
  min-height: 100vh;
}

.client-area-preview-layout__background,
.client-area-preview-layout__content {
  grid-column: 1/2;
  grid-row: 1/2;
}

.client-area-preview-layout__content {
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: end;
  gap: 4rem;
  padding: 5rem;
  padding-bottom: 18rem;

  @media screen and (min-width: $medium) {
    gap: 8rem;
  }

  @media screen and (min-width: $large) {
    gap: 10rem;
  }

  @media screen and (min-width: $extraLarge) {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 45% 55%;
    gap: 12rem;
    align-items: center;
    justify-items: stretch;

  }
}
</style>
