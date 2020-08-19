<template>
  <ThemeStyle reactive>
    <BaseButton
      slot-scope="{ theme }"
      class="app-button"
      :color="theme['--text-color']"
      :icon="activeIconName"
      :icon-scale="activeIconScale"
      :icon-fill="false"
      :style="theme"
      @click="toggleMenuVisibility"
    />
  </ThemeStyle>
</template>

<script>
import { get, call } from 'vuex-pathify'

import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    ThemeStyle
  },

  computed: {
    isMenuActive: get('ui/isMenuActive'),

    activeIconName () {
      return this.isMenuActive ? 'cross' : 'menu'
    },

    activeIconScale () {
      return this.isMenuActive ? 1.389 : 1.667
    }
  },

  methods: {
    openMenu: call('ui/openMenu'),
    closeMenu: call('ui/closeMenu'),

    toggleMenuVisibility () {
      return this.isMenuActive
        ? this.closeMenu()
        : this.openMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.app-button {
  margin-right: 2.778rem;
  margin-top: 2.778rem;

  position: fixed;
  top: 0;
  right: 0;
  z-index: $z-index-app-button;

  @media screen and (min-width: $extraLarge) {
    margin-right: 68px;
    margin-top: 68px;
  }
}
</style>
