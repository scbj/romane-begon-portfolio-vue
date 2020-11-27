<template>
  <div class="app-viewer">
    <div class="app-viewer__counter">
      {{ activeIndex + 1 }} / {{ photos.length }}
    </div>
    <div class="app-viewer__carousel">
      <img
        class="app-viewer__image"
        :src="image(activePhoto, 1280)"
        @load="onLoad"
      >
      <transition name="fade">
        <div v-if="!imageLoaded" class="app-viewer__loader">
          Chargement..
        </div>
      </transition>
    </div>
    <div class="app-viewer__thumbnails">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="image(photo, 200)"
        class="app-viewer__thumbnail"
        @click="() => updateActive(index)"
      >
    </div>
    <div class="app-viewer__controls">
      <div class="icon-sun" />
      <div class="icon-fullscreen" />
      <BaseButton
        class="page-header__full-screen"
        color="white"
        icon="full-screen"
        :icon-scale="1.9"
        :icon-fill="false"
        @click="() => {}"
      />
    </div>
    <div class="app-viewer__previous" @click="previous">
      <ThemeStyle reactive>
        <BaseButton
          slot-scope="{ theme }"
          :color="theme['--text-color']"
          :style="theme"
        >
          PREV
        </BaseButton>
      </ThemeStyle>
    </div>
    <div class="app-viewer__next" @click="next">
      <ThemeStyle reactive>
        <BaseButton
          slot-scope="{ theme }"
          :color="theme['--text-color']"
          :style="theme"
        >
          NEXT
        </BaseButton>
      </ThemeStyle>
    </div>
  </div>
</template>

<script>
import { call, get } from 'vuex-pathify'

import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    ThemeStyle
  },

  data () {
    return {
      imageLoaded: false
    }
  },

  computed: {
    activeIndex: get('viewer/activeIndex'),
    activePhoto: get('viewer/activePhoto'),
    pending: get('viewer/pending'),
    photos: get('viewer/photos')
  },

  watch: {
    pending (pending) {
      this.imageLoaded = false
    }
  },

  methods: {
    next: call('viewer/next'),
    previous: call('viewer/previous'),
    updateActive: call('viewer/updateActive'),

    onLoad () {
      this.imageLoaded = true
    },

    image (src, dimension) {
      return `${src}/-/resize/${dimension}x/`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.app-viewer {
  color: var(--color-light-1);
  background: var(--color-dark-1);

  $side-size: 8.889rem;
  display: grid;
  grid-template-columns:
    [first carousel-start] minmax(0, 1fr)
    [next-button] minmax(0, 1fr) [carousel-end last];
  grid-template-rows:
    [first controls] 6.722rem
    [carousel-start] 1fr
    [carousel-end] auto [last];
  gap: 0.667rem;

  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index-app-viewer;

  @media screen and (min-width: $medium) {
    grid-template-columns:
      [first] minmax(8.889rem, auto)
      [carousel-start] 1fr [next-button] 1fr [carousel-end]
      minmax(8.889rem, auto) [last];
    grid-template-rows:
      [first carousel-start] auto
      1fr
      [controls] auto
      [carousel-end] auto;
    padding: 2.222rem 0;
  }
}

.app-viewer__carousel {
  grid-column: carousel-start / carousel-end;
  grid-row: carousel-start / carousel-end;
  position: relative;
  overflow: hidden;
}

.app-viewer__image {
  object-fit: contain;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
}

.app-viewer__loader {
  background: var(--color-dark-1);
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  z-index: 2;
}

.app-viewer__thumbnails {
  grid-column: first / last;
  grid-row: carousel-end / last;
  height: 130px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.app-viewer__thumbnail {
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  margin: 0 0.4rem;
  cursor: pointer;
}

.app-viewer__next,
.app-viewer__previous  {
  background: transparent;
  grid-row: carousel-start / carousel-end;
  z-index: 2;
  padding: 2rem;
  cursor: pointer;
}

.app-viewer__next {
  grid-row: carousel-start / carousel-end;
  grid-column: next-button;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: $medium) {
    grid-column: next-button / last;
  }
}

.app-viewer__previous {
  grid-row: carousel-start / carousel-end;
  grid-column: first;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: $medium) {
    grid-column: first / next-button;
  }
}

.app-viewer__counter {
  grid-column: first;
  grid-row: first;
  padding: 2rem;
}

.app-viewer__controls {
  grid-row: controls;
  grid-column: next-button;
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  gap: 0.556rem;
  margin-right: 68px;

  .icon-sun,
  .icon-fullscreen {
    background: pink;
    height: 20px;
    width: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
