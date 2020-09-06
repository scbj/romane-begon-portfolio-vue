<template>
  <div class="app-menu">
    <div class="app-menu_container">
      <MenuCover v-if="gte('extraLarge')" />
      <MenuPanel />
    </div>
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index-app-menu;
  overflow: hidden;
}

.app-menu_container {
  color: var(--color-light-1);
  background: var(--color-dark-1);

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "right";

  width: 100%;
  height: 100%;

  @media screen and (min-width: $extraLarge) {
    grid-template-columns: 60% 40%;
  }
}
</style>
