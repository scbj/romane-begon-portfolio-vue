<template>
  <ThemeStyle mode="light">
    <Intersect :treshold="[0.1, 0.5, 0.9]" @enter="onEnter">
      <ClientAreaPreviewLayout class="client-area-preview">
        <template v-slot:left>
          <div class="client-area-preview__text">
            <TextTitle large>
              Espace Client
            </TextTitle>
            <TextParagraph>
              Je vous ai accompagné dans les belles rues de Toulouse pour une séance photo inoubliable
              ? Je vous ai suivi dans un lieu magique pour immortaliser votre histoire ? J’ai passé l’une des
              plus belles journées de votre vie en votre compagnie ?
            </TextParagraph>
            <TextParagraph v-if="gte('medium')" class="client-area-preview__second-paragraph">
              Bienvenue dans votre espace personnel, il ne vous reste plus qu’à entrer votre mot de passe
              personnel pour frissonner d’émotions, revoir les sourires de vos proches, admirer les
              empreintes du bonheur ou revivre le plus beau jour de votre vie
            </TextParagraph>
          </div>
        </template>
        <template v-slot:right>
          <div class="client-area-preview__recents">
            <TextParagraph class="client-area-preview__recents-label">
              <!-- Galleries récentes -->
              Dernière gallerie ↓
            </TextParagraph>
            <ListView class="client-area-preview__galleries" :items="firstGalleries">
              <template v-slot:item="{ item }">
                <LumysGallery :gallery="item" />
              </template>
            </ListView>
            <BaseButton
              class="client-area-preview__more"
              :route="{ name: 'home' }"
              color="black"
              icon="galleries-2"
              :icon-scale="1.8"
              text="VOIR LES GALLERIES"
            />
          </div>
        </template>
      </ClientAreaPreviewLayout>
    </Intersect>
  </ThemeStyle>
</template>

<script>
import { call, get } from 'vuex-pathify'
import Intersect from 'vue-intersect'

import responsive from '@/mixins/responsive'

import ClientAreaPreviewLayout from '@/layouts/ClientAreaPreviewLayout'
import ListView from '@/components/ListView'
import LumysGallery from '@/components/LumysGallery'
import ThemeStyle from '@/components/ThemeStyle'
import TextParagraph from '@/components/TextParagraph'
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    ClientAreaPreviewLayout,
    Intersect,
    ListView,
    LumysGallery,
    ThemeStyle,
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
    loadLumysGalleries: call('clientArea/loadLumysGalleries'),

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

.client-area-preview {
  background: white;
}

.client-area-preview__text {
  color: var(--color-dark-1);
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  text-align: justify;
}

.client-area-preview__recents {
  display: flex;
  flex-direction: column;
  justify-self: stretch;
}

.client-area-preview__galleries {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(241px, 1fr));
  gap: 3rem;
  margin-top: 2rem;

  @media screen and (min-width: $medium) {
    grid-template-columns: repeat(auto-fill, minmax(241px, 300px));
    max-width: 700px;
  }
}

.client-area-preview__more {
  margin-top: 2rem;
  align-self: center;
}

.client-area-preview__recents-label {
  font-weight: 500;
  color: var(--color-dark-2);
  margin-bottom: 1.5rem;
}
</style>
