<template>
  <div
    class="navigation-menu"
    :class="animationClass"
    @animationend="onAnimationEnd"
  >
    <NavigationMenuCover v-if="gte('extraLarge')" />
    <NavigationMenuPanel />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

import NavigationMenuCover from '@/components/NavigationMenuCover'
import NavigationMenuPanel from '@/components/NavigationMenuPanel'

import responsive from '@/mixins/responsive'

export default {
  components: {
    NavigationMenuCover,
    NavigationMenuPanel
  },

  mixins: [responsive],

  data () {
    return {
      animationClass: ''
    }
  },

  computed: {
    isMenuActive: get('ui/isMenuActive')
  },

  watch: {
    isMenuActive: {
      immediate: true,
      handler (active) {
        this.animationClass = active
          ? 'navigation-menu--appear'
          : 'navigation-menu--vanish'
      }
    }
  },

  methods: {
    onAnimationEnd () {
      console.log('yo')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_vars.scss';

.navigation-menu {
  color: var(--color-light-1);
  background: var(--color-dark-1);

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "right";

  height: 100%;

  @media screen and (min-width: $extraLarge) {
    grid-template-columns: 60% 40%;
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
