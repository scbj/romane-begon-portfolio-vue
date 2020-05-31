<template>
  <PrestationPreviewLayout class="prestation-preview">
    <template v-slot:background>
      <div class="prestation-preview__background">
        <div class="prestation-preview__background-picture" />
        <div class="prestation-preview__background-overlay" />
      </div>
    </template>

    <template v-slot:content>
      <div class="prestation-preview__content">
        <TextTitle extra-large>
          Mariages
        </TextTitle>
        <TextParagraph>
          Emotion, amour, douceur et sensualité.<br>
          Voilà quatre mots qui qualifient parfaitement mon approche de la photographie et je serai
          heureuse d’apporter ce regard singulier au plus beau jour de votre vie.
        </TextParagraph>
      </div>
    </template>
  </PrestationPreviewLayout>
</template>

<script>
import PrestationPreviewLayout from '@/layouts/PrestationPreviewLayout'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    PrestationPreviewLayout,
    TextParagraph,
    TextTitle
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
}

.prestation-preview__background-picture {
  background-image: url(/photos/site37.jpg);
  background-size: cover;
  background-position: 63%;
  background-repeat: no-repeat;
}

.prestation-preview__background-overlay {
  background: linear-gradient(90deg, rgba(15,14,11,1) 8%, rgba(15,14,11,0.06) 59%);
}

.prestation-preview__content {
  padding-left: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  @media screen and (min-width: $large) {
    padding-left: 28rem;
  }

  @media screen and (min-width: $extraLarge) {
    padding-left: 43rem;
  }
}
</style>
