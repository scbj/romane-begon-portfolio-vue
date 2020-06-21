<template>
  <AppLayout id="app">
    <template #page>
      <router-view />
    </template>
    <template #menu>
      <Menu />
    </template>
    <template #button>
      <MenuButton />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue'
import Menu from '@/views/Menu.vue'
import MenuButton from '@/components/MenuButton.vue'

export default {
  components: {
    AppLayout,
    Menu,
    MenuButton
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
 --color-light-4: rgba(255, 255, 255, 0.27);

 --color-dark-1: #0f0e0b;
 --color-dark-2: #1C1C1C;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: black;
}
</style>
