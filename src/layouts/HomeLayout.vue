<template>
  <div class="home-layout">
    <ParallaxContainer
      class="home-layout__content"
      tag="main"
      :perspective="220"
    >
      <slot name="content" />
    </ParallaxContainer>
    <div class="home-layout__top">
      <slot name="top" />
    </div>
    <div class="home-layout__right">
      <slot name="right" />
    </div>
    <div class="home-layout__bottom">
      <slot name="bottom" />
    </div>
    <div v-if="gte('medium')" class="home-layout__left">
      <slot name="left" />
    </div>
  </div>
</template>

<script>
import ParallaxContainer from '@/components/ParallaxContainer'

import responsive from '@/mixins/responsive'

export default {
  components: {
    ParallaxContainer
  },

  mixins: [responsive]
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';
@import '@/assets/styles/_vars.scss';

.home-layout {
  min-height: 100vh;
  height: 100%;
}

.home-layout__content {
  @include hide-scrollbar;
}

.home-layout__top {
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: $extraLarge) {
    top: 3.8rem;
  }
}

.home-layout__right {
  position: fixed;
  right: 5rem;
  top: 14rem;
  z-index: 10;

  @media screen and (min-width: $extraLarge) {
    right: 6.8rem;
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

.home-layout__left {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 5rem;
  z-index: 10;

  @media screen and (min-width: $extraLarge) {
    left: 6.8rem;
  }
}
</style>
