<template>
  <div class="app-menu">
    <MenuCover v-if="gte('extraLarge')" />
    <MenuPanel />
  </div>
</template>

<script>
import MenuCover from '@/components/MenuCover'
import MenuPanel from '@/components/MenuPanel'

import responsive from '@/mixins/responsive'

export default {
  components: {
    MenuCover,
    MenuPanel
  },

  mixins: [responsive]
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.app-menu {
  color: var(--color-light-1);
  background: var(--color-dark-1);

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "right";

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index-app-menu;

  @media screen and (min-width: $extraLarge) {
    grid-template-columns: 60% 40%;
  }
}
</style>
