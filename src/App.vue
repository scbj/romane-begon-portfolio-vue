<template>
  <div id="app">
    <RouterView class="app__page" />
    <AppViewer v-show="isViewerActive" />
    <AppMenu v-show="isMenuActive" />
    <AppButton />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    AppViewer: () => import(/* webpackPrefetch: true */ '@/components/AppViewer.vue'),
    AppMenu: () => import(/* webpackPrefetch: true */ '@/components/AppMenu.vue'),
    AppButton
  },

  computed: {
    isMenuActive: get('ui/isMenuActive'),
    isViewerActive: get('ui/isViewerActive')
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
  height: 100%;
  position: relative;
}

.app__page {
  z-index: $z-index-app-page;
}
</style>
