<template>
  <StaticTheme reactive>
    <BaseButton
      slot-scope="{ theme }"
      class="menu-button"
      :color="theme['--text-color']"
      :icon="activeIconName"
      :icon-scale="activeIconScale"
      :icon-fill="false"
      :style="theme"
      @click="toggleMenuVisibility"
    />
  </StaticTheme>
</template>

<script>
import { get, call } from 'vuex-pathify'

import StaticTheme from '@/components/StaticTheme'

export default {
  components: {
    StaticTheme
  },

  computed: {
    isMenuActive: get('ui/isMenuActive'),

    activeIconName () {
      return this.isMenuActive ? 'cross' : 'menu'
    },

    activeIconScale () {
      return this.isMenuActive ? 2.5 : 3
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
