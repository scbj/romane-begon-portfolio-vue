<template>
  <PageLayout>
    <ThemeStyle mode="light">
      <div
        slot-scope="{ theme }"
        class="client-area"
        :style="theme"
      >
        <TextTitle large class="client-area__title">
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
        <BaseList class="client-area__galleries" :items="galleries">
          <template v-slot:item="{ item }">
            <LumysGallery :gallery="item" />
          </template>
        </BaseList>
      </div>
    </ThemeStyle>
  </PageLayout>
</template>

<script>
import { call, get } from 'vuex-pathify'

import PageLayout from '@/layouts/PageLayout'

import BaseList from '@/components/base/BaseList'
import LumysGallery from '@/components/LumysGallery'
import TextTitle from '@/components/TextTitle'
import TextParagraph from '@/components/TextParagraph'
import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    PageLayout,
    BaseList,
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

.client-area__galleries {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  margin: auto;
  margin-top: 4rem;
  max-width: 140rem;
}
</style>
