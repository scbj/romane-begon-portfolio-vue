<template>
  <BaseButton class="menu-button" @click="toggleMenuVisibility">
    <BaseIcon
      :name="activeIconName"
      :fill="false"
      :size="activeIconSize"
    />
  </BaseButton>
</template>

<script>
import { get, call } from 'vuex-pathify'

export default {
  computed: {
    isMenuActive: get('ui/isMenuActive'),

    activeIconName () {
      return this.isMenuActive ? 'cross' : 'menu'
    },

    activeIconSize () {
      return this.isMenuActive ? '18' : '21'
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
