<template>
  <Intersect :treshold="[0.1, 0.5, 0.9]" @enter="onEnter">
    <ParallaxGroup class="contact-section" :style="cssVariables">
      <ParallaxLayer class="contact-section__background" depth="back">
        <div class="contact-section__background-picture" />
        <div class="contact-section__background-overlay contact-section__background--foo" />
      </ParallaxLayer>

      <ParallaxLayer class="contact-section__content" depth="base">
        <PrestationCounter />
        <TextTitle extra-large>
          Contact
        </TextTitle>
        <TextTitle large style="text-align: center">
          <span class="no-wrap">Les réservations</span> <span class="no-wrap">sont ouvertes !</span>
        </TextTitle>
        <TextParagraph>
          Racontez-moi votre histoire, vos projets et vos envies en détails !
        </TextParagraph>
        <BaseButton
          class="contact-section__contact-button"
          :route="{ name: 'prestationInfos', params: { prestation: to } }"
          color="white"
          icon="play"
          :icon-scale="1.12"
          text="ÉCRIVONS-NOUS"
        />
      </ParallaxLayer>
    </ParallaxGroup>
  </Intersect>
</template>

<script>
import Intersect from 'vue-intersect'

import ParallaxGroup from '@/components/ParallaxGroup'
import ParallaxLayer from '@/components/ParallaxLayer'
import PrestationCounter from '@/components/PrestationCounter'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

import data from '@/assets/data/home.json'

export default {
  components: {
    Intersect,
    ParallaxGroup,
    ParallaxLayer,
    PrestationCounter,
    TextParagraph,
    TextTitle
  },

  computed: {
    sentence () {
      return {
        text: data.sentence,
        author: data.author
      }
    },

    cssVariables () {
      const bgImage = 'https://ucarecdn.com/928d894b-c200-47d9-a97a-52cd17a234c9/'
      const bgPosition = '35%'
      const size = Math.max(window.innerHeight, window.innerWidth)
      const resizing = window.innerHeight > window.innerWidth
        ? `x${size}`
        : `${size}x`
      return {
        '--background-image': `url(${bgImage}-/resize/${resizing}/)`,
        '--background-position': bgPosition
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

.no-wrap {
  white-space: nowrap;
}

.contact-section {
  display: grid;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;
}

.contact-section__background,
.contact-section__content {
  grid-column: 1/2;
  grid-row: 1/2;
}

.contact-section__background {
  display: grid;
  width: 100%;
  height: 100%;
}

.contact-section__background-picture,
.contact-section__background-overlay {
  grid-column: 1/2;
  grid-row: 1/2;
  height: 100%;
  width: 100%;
}

.contact-section__background-picture {
  background-image: var(--background-image);
  background-size: cover;
  background-position: var(--background-position);
  background-repeat: no-repeat;
}

.contact-section__background-overlay {
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

.contact-section__content {
  color: var(--color-light-1);
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 30vh;

  @media screen and (min-width: $medium) {
    justify-content: center;
    padding: 2rem;
    padding-left: 32rem;
    padding-top: 10vh;
  }

  @media screen and (min-width: $large) {
    padding: 2rem;
    padding-left: 37rem;
    padding-top: 10vh;
  }

  @media screen and (min-width: $extraLarge) {
    padding: 0;
    padding-top: 10vh;
  }
}

.contact-section__contact-button {
  margin-top: 4.9rem;
}
</style>
