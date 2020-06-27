<template>
  <ThemeStyle mode="light">
    <div
      slot-scope="{ theme }"
      class="client-area"
      :style="theme"
    >
      <TextTitle extra-large class="client-area__title">
        Espace Client
      </TextTitle>
      <TextParagraph>
        Je vous ai accompagné dans les belles rues de Toulouse pour une séance photo inoubliable
        ? Je vous ai suivi dans un lieu magique pour immortaliser votre histoire ? J’ai passé l’une des
        plus belles journées de votre vie en votre compagnie ?
      </TextParagraph>
      <TextParagraph>
        Bienvenue dans votre espace personnel, il ne vous reste plus qu’à entrer votre mot de passe
        personnel pour frissonner d’émotions, revoir les sourires de vos proches, admirer les
        empreintes du bonheur ou revivre le plus beau jour de votre vie
      </TextParagraph>
      <ListView class="client-area-preview__galleries" :items="galleries">
        <template v-slot:item="{ item }">
          <LumysGallery :gallery="item" />
        </template>
      </ListView>
    </div>
  </ThemeStyle>
</template>

<script>
import { call, get } from 'vuex-pathify'

import ListView from '@/components/ListView'
import LumysGallery from '@/components/LumysGallery'
import TextTitle from '@/components/TextTitle'
import TextParagraph from '@/components/TextParagraph'
import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    ListView,
    LumysGallery,
    TextParagraph,
    TextTitle,
    ThemeStyle
  },

  computed: {
    galleries: get('clientArea/sortedGalleries')
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
.client-area {
  color: var(--color-dark-1);
  background: white;
  min-height: 100vh;
  padding: 4rem;
}
</style>
