<template>
  <Intersect :treshold="[0.1, 0.5, 0.9]" @enter="onEnter">
    <ParallaxGroup class="section-prestation" :style="cssVariables">
      <ParallaxLayer class="section-prestation__background" depth="back">
        <div class="section-prestation__background-picture" />
        <div class="section-prestation__background-overlay" :class="overlayClass" />
      </ParallaxLayer>

      <ParallaxLayer class="section-prestation__content" depth="base">
        <PrestationCounter />
        <TextTitle
          ref="title"
          extra-large
          class="section-prestation__title text-charming"
        >
          {{ title }}
        </TextTitle>
        <TextParagraph>
          {{ description }}
        </TextParagraph>
        <BaseButton
          class="section-prestation__browse-button"
          :route="{ name: 'prestationInfos', params: { prestation: to } }"
          color="white"
          circle
          icon="play"
          :icon-scale="0.622"
          text="DÉCOUVRIR PLUS EN DETAILS"
          @mouseenter.native="onBrowseButtonEnter"
        />
      </ParallaxLayer>
    </ParallaxGroup>
  </Intersect>
</template>

<script>
import Intersect from 'vue-intersect'

import TextCharming from '@/animations/TextCharming'

import ParallaxGroup from '@/components/parallax/ParallaxGroup'
import ParallaxLayer from '@/components/parallax/ParallaxLayer'
import PrestationCounter from '@/components/PrestationCounter'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    Intersect,
    ParallaxGroup,
    ParallaxLayer,
    PrestationCounter,
    TextParagraph,
    TextTitle
  },

  props: {
    bgImage: {
      type: String,
      required: true
    },
    bgPosition: {
      type: String,
      default: '63%'
    },
    description: {
      type: String,
      required: true
    },
    overlay: {
      type: String,
      default: 'left'
    },
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      titleAnimationRunning: false,
      textEffect: null
    }
  },

  computed: {
    cssVariables () {
      const size = Math.max(window.innerHeight, window.innerWidth)
      const resizing = window.innerHeight > window.innerWidth
        ? `x${size}`
        : `${size}x`
      return {
        '--background-image': `url(${this.bgImage}-/resize/${resizing}/)`,
        '--background-position': this.bgPosition
      }
    },

    overlayClass () {
      return `section-prestation__background--${this.overlay}`
    }
  },

  mounted () {
    this.textEffect = new TextCharming(this.$refs.title)
  },

  methods: {
    onEnter (entry) {
      if (entry[0].intersectionRatio > 0.2) {
        this.$emit('visible')
      }
    },
    onBrowseButtonEnter () {
      this.textEffect.charm()
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
}

.section-prestation__background-overlay {
  &[class*="--left"] {
    background: linear-gradient(90deg, rgba(15,14,11,1) 8%, rgba(15,14,11,0.06) 59%);
  }
  &[class*="--wide"] {
    background: linear-gradient(90deg, rgba(15,14,11,1) 0%, rgba(15,14,11,0.06) 62%);
  }
  &[class*="--foo"] {
    background: linear-gradient(90deg, rgba(15,14,11,1) 8%, rgba(15,14,11,0.06) 70%);
  }
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
    padding: 0;
    padding-left: 17.778rem;
  }

  @media screen and (min-width: $large) {
    padding: 0;
    padding-left: 20.556rem;
  }

  @media screen and (min-width: $extraLarge) {
    padding: 0;
    padding-left: 23.889rem;
  }
}

.section-prestation__browse-button {
  margin-top: 2.722rem;
}

.section-prestation__title {
  white-space: pre-line;
}
</style>
