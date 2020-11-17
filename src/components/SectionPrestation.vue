<template>
  <!-- eslint-disable vue/multiline-html-element-content-newline -->
  <ParallaxGroup
    class="section-prestation"
    :style="customProperties"
    :class="modifiers"
  >
    <ParallaxLayer class="section-prestation__background" depth="back">
      <div class="section-prestation__background-picture" />
      <div class="section-prestation__background-overlay" />
    </ParallaxLayer>

    <ParallaxLayer class="section-prestation__content" depth="base">
      <PrestationCounter :value="progressNumber" />
      <TextTitle
        ref="title"
        extra-large
        class="section-prestation__title text-charming"
      >{{
        prestation.title
      }}</TextTitle>
      <TextParagraph class="section-prestation__description">
        {{ prestation.description }}
      </TextParagraph>
      <BaseButton
        class="section-prestation__browse-button"
        :route="linkRoute"
        color="white"
        circle
        icon="play"
        :icon-scale="0.622"
        text="DÉCOUVRIR PLUS EN DETAILS"
        @mouseenter.native="onBrowseButtonEnter"
      />
    </ParallaxLayer>
  </ParallaxGroup>
</template>

<script>
import TextCharming from '@/animations/TextCharming'

import { slugifyPrestationParam } from '@/router/routes'

import ParallaxGroup from '@/components/parallax/ParallaxGroup'
import ParallaxLayer from '@/components/parallax/ParallaxLayer'
import PrestationCounter from '@/components/PrestationCounter'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    ParallaxGroup,
    ParallaxLayer,
    PrestationCounter,
    TextParagraph,
    TextTitle
  },

  props: {
    prestation: {
      type: Object,
      required: true
    },
    progressNumber: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      titleAnimationRunning: false,
      textEffect: null,
      isBackgroundImageReady: false
    }
  },

  computed: {
    customProperties () {
      const backgroundImageUrl = this.isBackgroundImageReady
        ? this.backgroundImage.responsive
        : this.backgroundImage.blur
      return {
        '--background-image': `url(${backgroundImageUrl})`,
        '--background-position': this.prestation.backgroundPosition ?? '63%'
      }
    },

    backgroundImage () {
      const size = Math.min(Math.max(window.innerHeight, window.innerWidth), 3000)
      const resizing = window.innerHeight > window.innerWidth
        ? `x${size}`
        : `${size}x`
      return {
        blur: `${this.prestation.backgroundImage}-/resize/200x/`,
        responsive: `${this.prestation.backgroundImage}-/resize/${resizing}/`
      }
    },

    modifiers () {
      const overlay = this.prestation.overlay ?? 'left'
      return {
        [`section-prestation--overlay-${overlay}`]: true,
        'section-prestation--loading': !this.isBackgroundImageReady
      }
    },

    linkRoute () {
      return {
        name: 'prestationInfos',
        params: {
          prestation: slugifyPrestationParam(this.prestation.title)
        }
      }
    }
  },

  created () {
    this.preloadImage(this.backgroundImage.responsive)
      .then(() => {
        this.isBackgroundImageReady = true
      })
  },

  mounted () {
    const hasWhitespace = /\s/g.test(this.$refs.title.textContent)
    if (!hasWhitespace) {
      this.textEffect = new TextCharming(this.$refs.title)
    }
  },

  methods: {
    onBrowseButtonEnter () {
      this.textEffect && this.textEffect.charm()
    },
    /**
     * Preload the specified image and return true if successful.
     * @param {String} src The image source
     */
    preloadImage (src) {
      return new Promise((resolve, reject) => {
        if (!src) return resolve(false)
        const image = new Image()
        image.onload = () => resolve(true)
        image.onerror = () => resolve(false)
        image.src = src
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_vars.scss';

.section-prestation {
  display: grid;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;

  // Modifiers
  &--overlay-left .section-prestation__background-overlay  {
    background: linear-gradient(90deg, rgba(15,14,11,1) 8%, rgba(15,14,11,0.06) 59%);
  }
  &--overlay-wide .section-prestation__background-overlay  {
    background: linear-gradient(90deg, rgba(15,14,11,1) 0%, rgba(15,14,11,0.06) 62%);
  }
  &--overlay-foo .section-prestation__background-overlay  {
    background: linear-gradient(90deg, rgba(15,14,11,1) 8%, rgba(15,14,11,0.06) 70%);
  }
  &--loading .section-prestation__background-picture {
    filter: blur(30px);
  }
}

.section-prestation__background,
.section-prestation__content {
  grid-column: 1/2;
  grid-row: 1/2;
}

.section-prestation__background {
  display: grid;
  width: 100%;
  height: 100%;
}

.section-prestation__background-picture,
.section-prestation__background-overlay {
  grid-column: 1/2;
  grid-row: 1/2;
  height: 100%;
  width: 100%;
}

.section-prestation__background-picture {
  background-image: var(--background-image);
  background-size: cover;
  background-position: var(--background-position);
  background-repeat: no-repeat;
  transition: filter 600ms ease-out;
}

.section-prestation__content {
  color: var(--color-light-1);
  padding: 2.778rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;

  @media screen and (min-width: $medium) {
    justify-content: center;
    padding: 2rem 60px;
    padding-left: 17.778rem;
  }

  @media screen and (min-width: $large) {
    padding: 2rem 60px;
    padding-left: 20.556rem;
  }

  @media screen and (min-width: $extraLarge) {
    padding: 2rem 60px;
    padding-left: 23.889rem;
  }
}

.section-prestation__browse-button {
  margin-top: 2.722rem;

  span {
    font-size: clamp(0.889rem, 2vw ,1.1rem) !important;
  }

  svg {
    transform: translateX(1.8px) translateY(-1px);
  }
}

.section-prestation__title {
  white-space: pre-line;
  font-size: clamp(4.556rem, 8.4vw, 7.056rem)
}

.section-prestation__description {
  font-size: clamp(16px, 3vw, 22px)
}
</style>
