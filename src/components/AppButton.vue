<template>
  <ThemeStyle reactive>
    <BaseButton
      slot-scope="{ theme }"
      class="app-button"
      :color="isMenuActive ? '#f3f3f3' : theme['--text-color']"
      :icon="activeIconName"
      :icon-scale="activeIconScale"
      :icon-fill="false"
      :style="theme"
      @click="toggleModalVisibility"
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
    isViewerActive: get('ui/isViewerActive'),

    activeIconName () {
      return this.isMenuActive || this.isViewerActive ? 'cross' : 'menu'
    },

    activeIconScale () {
      return this.isMenuActive || this.isViewerActive ? 1.389 : 1.667
    }
  },

  methods: {
    openMenu: call('ui/openMenu'),
    closeMenu: call('ui/closeMenu'),
    closeViewer: call('ui/closeViewer'),

    toggleModalVisibility () {
      if (this.isViewerActive) {
        this.$router.go(-1)
        return this.closeViewer()
      }
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
  margin-right: 2rem;
  margin-top: 2rem;

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
