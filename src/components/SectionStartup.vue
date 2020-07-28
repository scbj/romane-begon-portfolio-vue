<template>
  <Intersect :treshold="[0.1, 0.5, 0.9]" @enter="onEnter">
    <ParallaxGroup class="section-startup" :style="cssVariables">
      <ParallaxLayer class="section-startup__background" depth="back">
        <div class="section-startup__background-picture" />
        <div class="section-startup__background-overlay" />
      </ParallaxLayer>

      <ParallaxLayer class="section-startup__content" depth="base">
        <WebsiteTitle size="large" />
        <div class="section-startup__content-citation">
          <span class="sentence-1">« {{ sentence.text }}. »</span>
          <span class="sentence-2">{{ sentence.author }}</span>
        </div>
      </ParallaxLayer>
    </ParallaxGroup>
  </Intersect>
</template>

<script>
import Intersect from 'vue-intersect'

import ParallaxGroup from '@/components/parallax/ParallaxGroup'
import ParallaxLayer from '@/components/parallax/ParallaxLayer'
import WebsiteTitle from '@/components/WebsiteTitle'

import data from '@/assets/data/home.json'

export default {
  components: {
    Intersect,
    ParallaxGroup,
    ParallaxLayer,
    WebsiteTitle
  },

  computed: {
    sentence () {
      return {
        text: data.sentence,
        author: data.author
      }
    },

    cssVariables () {
      const size = Math.max(window.innerHeight, window.innerWidth)
      const resizing = window.innerHeight > window.innerWidth
        ? `x${size}`
        : `${size}x`
      return {
        '--background-image': `url(https://ucarecdn.com/3aab7c22-2672-4fe6-ba7f-dbd5bc5038bc/-/resize/${resizing}/)`
      }
    }
  },

  methods: {
    onEnter (entry) {
      if (entry[0].intersectionRatio > 0.2) {
        this.$emit('visible')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.section-startup {
  display: grid;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;
}

.section-startup__background,
.section-startup__content {
  grid-column: 1/2;
  grid-row: 1/2;
}

.section-startup__background {
  display: grid;
  width: 100%;
  height: 100%;
}

.section-startup__background-picture,
.section-startup__background-overlay {
  grid-column: 1/2;
  grid-row: 1/2;
}

.section-startup__background-picture {
  background-image: var(--background-image);
  background-size: cover;
  background-position: 63%;
  background-repeat: no-repeat;
}

.section-startup__background-overlay {
  background: linear-gradient(0deg, rgba(15,14,11,0.4009978991596639) 0%, rgba(15,14,11,0.05926120448179273) 100%)
}

.section-startup__content {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  padding-top: 44vh;

  @media screen and (min-width: $extraLarge) {
    padding-top: 43vh;
  }

  @media screen and (max-height: $medium) {
    padding-top: 38vh;
  }
}

.section-startup__content-citation {
  font-family: "Garamond Premier Pro Display", serif;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.5em;
  letter-spacing: 0.052em;
  text-align: center;
  color: #F3F3F3;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.73em;

  > span {
    margin-top: 0.682em;

    &:first-of-type {
      margin-top: 0;
    }

    &.sentence-1 {
      font-style: italic;
    }

    &.sentence-2 {
      margin-top: 0.1em;
    }
  }
}
</style>
