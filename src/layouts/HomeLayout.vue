<template>
  <div class="home-layout">
    <ParallaxContainer class="home-layout__content" tag="main">
      <slot name="content" />
    </ParallaxContainer>
    <div class="home-layout__fixed">
      <slot name="fixed" />
    </div>
  </div>
</template>

<script>
import ParallaxContainer from '@/components/ParallaxContainer'

export default {
  components: {
    ParallaxContainer
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';
@import '@/assets/styles/_vars.scss';

.home-layout {
  height: 100%;
}

.home-layout__content {
  @include hide-scrollbar;
}

.home-layout__fixed {
  position: fixed;
  right: 5rem;
  top: 14rem;
  z-index: 10;

  @media screen and (min-width: $extraLarge) {
    right: 68px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
