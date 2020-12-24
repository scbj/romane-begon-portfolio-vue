<template>
  <ParallaxGroup class="section-contact" :style="cssVariables">
    <ParallaxLayer class="section-contact__background" depth="back">
      <div class="section-contact__background-picture" />
      <div class="section-contact__background-overlay section-contact__background--foo" />
    </ParallaxLayer>

    <ParallaxLayer class="section-contact__content" depth="base">
      <SectionCounter :value="6" />
      <TextTitle
        ref="title"
        class="text-charming"
        extra-large
      >
        Contact
      </TextTitle>
      <TextTitle large style="text-align: center">
        <span class="no-wrap">Les réservations</span> <span class="no-wrap">sont ouvertes !</span>
      </TextTitle>
      <TextParagraph>
        Racontez-moi votre histoire, vos projets et vos envies en détails !
      </TextParagraph>
      <BaseButton
        class="section-contact__contact-button"
        :route="{ name: 'contact' }"
        color="white"
        icon="play"
        :icon-scale="0.622"
        text="ÉCRIVONS-NOUS"
        @mouseenter.native="onContactButtonEnter"
      />
    </ParallaxLayer>
  </ParallaxGroup>
</template>

<script>
import TextCharming from '@/animations/TextCharming'

import ParallaxGroup from '@/components/parallax/ParallaxGroup'
import ParallaxLayer from '@/components/parallax/ParallaxLayer'
import SectionCounter from '@/components/SectionCounter'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

import data from '@/assets/data/home.json'

export default {
  components: {
    ParallaxGroup,
    ParallaxLayer,
    SectionCounter,
    TextParagraph,
    TextTitle
  },

  data () {
    return {
      titleEffect: null
    }
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
      const size = Math.min(Math.max(window.innerHeight, window.innerWidth), 3000)
      const resizing = window.innerHeight > window.innerWidth
        ? `x${size}`
        : `${size}x`
      return {
        '--background-image': `url(${bgImage}-/resize/${resizing}/)`,
        '--background-position': bgPosition
      }
    }
  },

  mounted () {
    this.titleEffect = new TextCharming(this.$refs.title)
  },

  methods: {
    onContactButtonEnter () {
      this.titleEffect.charm()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.no-wrap {
  white-space: nowrap;
}

.section-contact {
  display: grid;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;
}

.section-contact__background,
.section-contact__content {
  grid-column: 1/2;
  grid-row: 1/2;
}

.section-contact__background {
  display: grid;
  width: 100%;
  height: 100%;
}

.section-contact__background-picture,
.section-contact__background-overlay {
  grid-column: 1/2;
  grid-row: 1/2;
  height: 100%;
  width: 100%;
}

.section-contact__background-picture {
  background-image: var(--background-image);
  background-size: cover;
  background-position: var(--background-position);
  background-repeat: no-repeat;
}

.section-contact__background-overlay {
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

.section-contact__content {
  color: var(--color-light-1);
  padding: 2.778rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 30vh;

  @media screen and (min-width: $medium) {
    justify-content: center;
    padding: 1.111rem;
    padding-left: 17.778rem;
    padding-top: 10vh;
  }

  @media screen and (min-width: $large) {
    padding: 1.111rem;
    padding-left: 20.556rem;
    padding-top: 10vh;
  }

  @media screen and (min-width: $extraLarge) {
    padding: 0;
    padding-top: 10vh;
  }
}

.section-contact__contact-button {
  margin-top: 2.722rem;
}
</style>
