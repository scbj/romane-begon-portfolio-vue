<template>
  <div class="home-layout">
    <ParallaxContainer class="home-layout__content" tag="main">
      <slot name="content" />
    </ParallaxContainer>
    <div class="home-layout__right">
      <slot name="right" />
    </div>
    <div class="home-layout__bottom">
      <slot name="bottom" />
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

.home-layout__right {
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

.home-layout__bottom {
  position: fixed;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
