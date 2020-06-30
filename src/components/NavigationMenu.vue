<template>
  <div class="navigation-menu">
    <NavigationMenuCover v-if="gte('extraLarge')" />
    <NavigationMenuPanel />
  </div>
</template>

<script>
import NavigationMenuCover from '@/components/NavigationMenuCover'
import NavigationMenuPanel from '@/components/NavigationMenuPanel'

import responsive from '@/mixins/responsive'

export default {
  components: {
    NavigationMenuCover,
    NavigationMenuPanel
  },

  mixins: [responsive]
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.navigation-menu {
  color: var(--color-light-1);
  background: var(--color-dark-1);

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "right";

  height: 100%;

  @media screen and (min-width: $extraLarge) {
    grid-template-columns: 60% 40%;
  }
}
</style>
