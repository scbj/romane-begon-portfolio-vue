<template>
  <div class="app-layout">
    <div class="app-layout__page">
      <slot name="page" />
    </div>
    <div v-show="isMenuActive" class="app-layout__menu">
      <slot name="menu" />
    </div>
    <div class="app-layout__button">
      <slot name="button" />
    </div>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  computed: {
    isMenuActive: get('ui/isMenuActive')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.app-layout {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: stretch;
  justify-items: stretch;
  height: 100%;
}

.app-layout__page {
  grid-column: 1/3;
  grid-row: 1/3;
  z-index: $z-index-app-page;
}

.app-layout__menu {
  grid-column: 1/3;
  grid-row: 1/3;
  z-index: $z-index-app-menu;
}

.app-layout__button {
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
