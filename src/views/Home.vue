<template>
  <ParallaxContainer class="home" tag="main">
    <StartupParallax
      v-for="(n, index) of 4"
      :key="index"
      :style="`z-index: ${n}`"
    />
  </ParallaxContainer>
</template>

<script>
import StartupParallax from '@/views/StartupParallax'
import ParallaxContainer from '@/components/ParallaxContainer'

export default {
  components: {
    ParallaxContainer,
    StartupParallax
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';

.home {
  @include hide-scrollbar;
}
</style>
