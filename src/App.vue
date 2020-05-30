<template>
  <AppLayout id="app">
    <template v-slot:page>
      <router-view />
    </template>
    <template v-slot:button>
      <BaseIcon
        name="menu"
        :fill="false"
        size="21"
      />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue'

export default {
  components: {
    AppLayout
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/base.scss';
@import '@/assets/styles/fonts.scss';

#app {
 --color-light-1: #f3f3f3;
 --color-light-2: #e4e4e4;
 --color-light-3: #cccccc;

 --color-dark-1: #0f0e0b;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: black;
}
</style>
