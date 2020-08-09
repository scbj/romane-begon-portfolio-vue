<template>
  <ThemeStyle reactive>
    <BaseButton
      slot-scope="{ theme }"
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
