<template>
  <section class="parallax-group">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.parallax-group {
  position: relative;
  height: 100%;
  transform-style: preserve-3d;

  scroll-snap-align: center;
}
</style>
