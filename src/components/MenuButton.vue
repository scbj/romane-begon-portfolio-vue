<template>
  <ReactiveTheme>
    <BaseButton
      slot-scope="props"
      class="menu-button"
      :color="props.theme['--text-color']"
      :icon="activeIconName"
      :icon-scale="activeIconScale"
      :icon-fill="false"
      @click="toggleMenuVisibility"
    />
  </ReactiveTheme>
</template>

<script>
import { get, call } from 'vuex-pathify'

import ReactiveTheme from '@/components/ReactiveTheme'

export default {
  components: {
    ReactiveTheme
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
