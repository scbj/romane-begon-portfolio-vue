<template>
  <ParallaxGroup class="section-client-area">
    <ParallaxLayer class="section-client-area__background" depth="back" />
    <ParallaxLayer class="section-client-area__content" depth="base">
      <div class="section-client-area__content-text">
        <TextTitle large>
          Espace Client
        </TextTitle>
        <TextParagraph>
          Je vous ai accompagné dans les belles rues de Toulouse pour une séance photo inoubliable
          ? Je vous ai suivi dans un lieu magique pour immortaliser votre histoire ? J’ai passé l’une des
          plus belles journées de votre vie en votre compagnie ?
        </TextParagraph>
        <TextParagraph v-if="gte('medium')">
          Bienvenue dans votre espace personnel, il ne vous reste plus qu’à entrer votre mot de passe
          personnel pour frissonner d’émotions, revoir les sourires de vos proches, admirer les
          empreintes du bonheur ou revivre le plus beau jour de votre vie
        </TextParagraph>
      </div>
      <div class="section-client-area__content-recents">
        <TextParagraph class="section-client-area__content-recents-label">
          <template v-if="gte('small')">
            Galeries récentes ↓
          </template>
          <template v-else>
            Dernière galerie ↓
          </template>
        </TextParagraph>
        <BaseList class="section-client-area__content-recents-galleries" :items="firstGalleries">
          <template #item="{ item }">
            <ClientAreaGallery :gallery="item" />
          </template>
        </BaseList>
        <BaseButton
          class="section-client-area__content-recents-more"
          :route="{ name: 'clientArea' }"
          color="black"
          icon="galleries-2"
          :icon-scale="1"
          text="VOIR LES GALLERIES"
        />
      </div>
    </ParallaxLayer>
  </ParallaxGroup>
</template>

<script>
import { call, get } from 'vuex-pathify'

import responsive from '@/mixins/responsive'

import ParallaxGroup from '@/components/parallax/ParallaxGroup'
import ParallaxLayer from '@/components/parallax/ParallaxLayer'
import BaseList from '@/components/base/BaseList'
import ClientAreaGallery from '@/components/ClientAreaGallery'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    ParallaxGroup,
    ParallaxLayer,
    BaseList,
    ClientAreaGallery,
    TextParagraph,
    TextTitle
  },

  mixins: [responsive],

  computed: {
    galleries: get('clientArea/sortedGalleries'),

    firstGalleries () {
      const howMuchGalleriesToDisplay = () => {
        if (this.gte('large')) return 4
        if (this.gte('small')) return 2
        return 1
      }
      const count = howMuchGalleriesToDisplay()
      return [...this.galleries].slice(0, count)
    }
  },

  mounted () {
    this.loadLumysGalleries()
  },

  methods: {
    loadLumysGalleries: call('clientArea/loadLumysGalleries')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.section-client-area {
  background: white;
  display: grid;
  align-items: stretch;
  justify-content: stretch;
  min-height: 100vh;
}

.section-client-area__background,
.section-client-area__content {
  grid-column: 1/2;
  grid-row: 1/2;
}

.section-client-area__content {
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: end;
  row-gap: 2.222rem;
  padding: 2.778rem;
  padding-bottom: 10rem;

  @media screen and (min-width: $medium) {
    column-gap: 4.444rem;
    row-gap: 0;
    padding: 2.778rem;
  }

  @media screen and (min-width: $large) {
    column-gap: 5.556rem;
    row-gap: 0;
  }

  @media screen and (min-width: $medium) {
    display: grid;
    grid-template-columns: 45% 55%;
    column-gap: 6.667rem;
    row-gap: 0;
    align-items: center;
    justify-items: stretch;
  }
}

.section-client-area__content-text {
  color: var(--color-dark-1);
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  text-align: justify;

  @media screen and (min-width: $medium) {
    justify-self: end;
  }
}

.section-client-area__content-recents {
  display: flex;
  flex-direction: column;
  justify-self: stretch;

  @media screen and (min-width: $medium) {
    justify-self: start;
  }
}

.section-client-area__content-recents-galleries {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(241px, 1fr));
  gap: 1.667rem;
  margin-top: 1.111rem;

  @media screen and (min-width: $medium) {
    grid-template-columns: repeat(auto-fill, minmax(241px, 300px));
    max-width: 700px;
  }
}

.section-client-area__content-recents-more {
  margin-top: 1.111rem;
  align-self: center;
}

.section-client-area__content-recents-label {
  font-weight: 600;
  color: var(--color-dark-2);
  margin-bottom: 0.833rem;
}
</style>
