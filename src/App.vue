<template>
  <div id="app">
    <router-view class="app__page" />
    <Menu v-show="isMenuActive" class="app__menu" />
    <MenuButton class="app__menu-button" />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import Menu from '@/components/Menu.vue'
import MenuButton from '@/components/MenuButton.vue'

export default {
  components: {
    Menu,
    MenuButton
  },

  computed: {
    isMenuActive: get('ui/isMenuActive')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/base.scss';
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/_vars.scss';

#app {
 --color-light-1: #f3f3f3;
 --color-light-2: #e4e4e4;
 --color-light-3: #cccccc;
 --color-light-4: rgba(255, 255, 255, 0.27);

 --color-dark-1: #0f0e0b;
 --color-dark-2: #1C1C1C;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: stretch;
  justify-items: stretch;
  height: 100%;
}

.app__page {
  grid-column: 1/3;
  grid-row: 1/3;
  z-index: $z-index-app-page;
}

.app__menu {
  grid-column: 1/3;
  grid-row: 1/3;
  z-index: $z-index-app-menu;
}

.app__menu-button {
  position: relative;
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: end;

  margin-right: 5rem;
  margin-top: 5rem;
  z-index: $z-index-app-button;

  @media screen and (min-width: $extraLarge) {
    margin-right: 68px;
    margin-top: 68px;
  }
}
</style>
