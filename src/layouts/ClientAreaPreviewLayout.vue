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
  row-gap: 4rem;
  padding: 5rem;
  padding-bottom: 18rem;

  @media screen and (min-width: $medium) {
    column-gap: 8rem;
    row-gap: 0;
    padding: 5rem;
  }

  @media screen and (min-width: $large) {
    column-gap: 10rem;
    row-gap: 0;
  }

  @media screen and (min-width: $medium) {
    display: grid;
    grid-template-columns: 45% 55%;
    column-gap: 12rem;
    row-gap: 0;
    align-items: center;
    justify-items: stretch;
  }
}
</style>
