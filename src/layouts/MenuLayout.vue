<template>
  <div class="menu-layout">
    <div v-if="gte('extraLarge')" class="menu-layout__left">
      <slot name="left" />
    </div>
    <div class="menu-layout__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import responsive from '@/mixins/responsive'

export default {
  mixins: [responsive]
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.menu-layout {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "right";

  height: 100vh;

  @media screen and (min-width: $extraLarge) {
    grid-template-columns: 60% 40%;
    grid-template-areas:
      "left right";
  }
}

.menu-layout__left {
  grid-area: left;
  display: grid;
}

.menu-layout__right {
  grid-area: right;
  display: grid;
  padding: 5rem;

  @media screen and (min-width: $extraLarge) {
    padding-bottom: 6vh;
    padding-left: 110px;
    padding-right: 68px;
    padding-top: 14vh;
  }
}
</style>
