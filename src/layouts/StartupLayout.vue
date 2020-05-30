<template>
  <ParallaxGroup class="startup-layout">
    <ParallaxLayer class="startup-layout__background" depth="back">
      <slot name="background" />
    </ParallaxLayer>
    <ParallaxLayer class="startup-layout__content" depth="fore">
      <slot name="content" />
    </ParallaxLayer>
    <ParallaxLayer class="startup-layout__fixed" depth="fore">
      <slot name="fixed" />
    </ParallaxLayer>
    <ParallaxLayer class="startup-layout__button" depth="fore">
      <slot name="button" />
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
.startup-layout__content,
.startup-layout__fixed,
.startup-layout__button {
  grid-column: 1/2;
  grid-row: 1/2;
}

.startup-layout__fixed {
  position: fixed;
  top: 14rem;
  right: 5rem;

  @media screen and (min-width: $extraLarge) {
    right: 68px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.startup-layout__button {
  position: fixed;
  right: 5rem;
  top: 5rem;

  @media screen and (min-width: $extraLarge) {
    right: 68px;
    top: 68px;
  }
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
