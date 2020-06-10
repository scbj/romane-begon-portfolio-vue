<template>
  <Intersect :treshold="[0.1, 0.5, 0.9]" @enter="onEnter">
    <PrestationPreviewLayout class="prestation-preview" :style="cssVariables">
      <template v-slot:background>
        <div class="prestation-preview__background">
          <div class="prestation-preview__background-picture" />
          <div class="prestation-preview__background-overlay" :class="overlayClass" />
        </div>
      </template>

      <template v-slot:content>
        <div class="prestation-preview__content">
          <PrestationCounter />
          <TextTitle extra-large>
            <slot name="title" />
          </TextTitle>
          <TextParagraph>
            <slot name="description" />
          </TextParagraph>
          <BaseButton
            class="prestation-preview__browse-button"
            :route="{ name: 'home' }"
            color="white"
            circle
            icon="play"
            :icon-scale="1.12"
            text="DÉCOUVRIR PLUS EN DETAILS"
          />
        </div>
      </template>
    </PrestationPreviewLayout>
  </Intersect>
</template>

<script>
import Intersect from 'vue-intersect'

import PrestationCounter from '@/components/PrestationCounter'
import PrestationPreviewLayout from '@/layouts/PrestationPreviewLayout'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    Intersect,
    PrestationCounter,
    PrestationPreviewLayout,
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
    overlay: {
      type: String,
      default: 'left'
    }
  },

  computed: {
    cssVariables () {
      return {
        '--background-image': `url(${this.bgImage})`,
        '--background-position': this.bgPosition
      }
    },

    overlayClass () {
      return `prestation-preview__background--${this.overlay}`
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

.prestation-preview__background {
  display: grid;
  width: 100%;
  height: 100%;
}

.prestation-preview__background-picture,
.prestation-preview__background-overlay {
  grid-column: 1/2;
  grid-row: 1/2;
  height: 100%;
  width: 100%;
}

.prestation-preview__background-picture {
  background-image: url(/photos/site37.jpg);
  background-image: var(--background-image);
  background-size: cover;
  background-position: var(--background-position);
  background-repeat: no-repeat;
}

.prestation-preview__background-overlay {
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

.prestation-preview__content {
  color: var(--color-light-1);
  padding: 5rem;
  padding-bottom: 18rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;

  @media screen and (min-width: $medium) {
    justify-content: center;
    padding: 0;
    padding-left: 32rem;
  }

  @media screen and (min-width: $large) {
    padding: 0;
    padding-left: 37rem;
  }

  @media screen and (min-width: $extraLarge) {
    padding: 0;
    padding-left: 43rem;
  }
}

.prestation-preview__browse-button {
  margin-top: 4.9rem;
}
</style>
