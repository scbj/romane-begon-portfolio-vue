<template>
  <BaseButton
    class="menu-button"
    color="white"
    :icon="activeIconName"
    :icon-scale="activeIconScale"
    :icon-fill="false"
    @click="toggleMenuVisibility"
  />
</template>

<script>
import { get, call } from 'vuex-pathify'

export default {
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
