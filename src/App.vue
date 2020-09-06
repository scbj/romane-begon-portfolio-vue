<template>
  <div id="app">
    <RouterView class="app__page" />
    <AppViewer v-show="isViewerActive" />
    <transition
      :ccs="false"
      @enter="onMenuTransitionEnter"
      @leave="onMenuTransitionLeave"
    >
      <AppMenu v-show="isMenuActive" />
    </transition>
    <AppButton />
  </div>
</template>

<script>
import { get, sync } from 'vuex-pathify'

import gsap, { Expo } from 'gsap'

import AppButton from '@/components/AppButton.vue'
import AppMenu from '@/components/AppMenu.vue'

export default {
  components: {
    AppViewer: () => import(/* webpackPrefetch: true */ '@/components/AppViewer.vue'),
    // AppMenu: () => import(/* webpackPrefetch: true */ '@/components/AppMenu.vue'),
    AppMenu,
    AppButton
  },

  data () {
    return {
      timeline: null
    }
  },

  computed: {
    isMenuActive: get('ui/isMenuActive'),
    isMenuTransitionRunning: sync('ui/isMenuTransitionRunning'),
    isViewerActive: get('ui/isViewerActive')
  },

  methods: {
    onMenuTransitionEnter (el, done) {
      const duration = 1.2
      const ease = Expo.easeInOut
      const reverseEl = el.querySelector('.app-menu_container')
      this.timeline = gsap.timeline({ onComplete: done })
      this.timeline
        .to(el, duration, {
          x: 0, startAt: { x: '100%' }, ease
        }).to(reverseEl, duration, {
          x: 0, startAt: { x: '-100%' }, ease
        }, 0)
    },
    onMenuTransitionLeave (el, done) {
      this.timeline.eventCallback('onReverseComplete', done)
      this.timeline.reverse()
    }
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

.reveal-enter-active,
.reveal-leave-active,
.reveal-enter-active > .app-menu_container,
.reveal-leave-active > .app-menu_container {
  transition: transform 1.2s cubic-bezier(.85,0,.19,.99);

  .menu-cover {
    transition: all .7s .6s ease-in-out;
  }
}

.reveal-enter,
.reveal-leave-to {
  transform: translateX(100%);

  > .app-menu_container {
    transform: translateX(-100%);
  }
}
</style>
