<template>
  <HomeLayout class="home">
    <template v-slot:content>
      <Startup
        style="z-index: 0"
        @visible="keepOnlySocialLinks()"
      />
      <PrestationPreview
        bg-image="https://ucarecdn.com/1ed9f271-6bc8-4265-8981-48abac7eb381/-/preview/site37.jpg"
        style="z-index: 1"
        overlay="left"
        @visible="showAllComponents()"
      >
        <template v-slot:title>
          Mariages
        </template>
        <template v-slot:description>
          Emotion, amour, douceur et sensualité.<br>
          Voilà quatre mots qui qualifient parfaitement mon approche de la photographie et je serai
          heureuse d’apporter ce regard singulier au plus beau jour de votre vie.
        </template>
      </PrestationPreview>
      <PrestationPreview
        bg-image="https://ucarecdn.com/8016437e-4f6e-42af-8d30-968d4fba8c29/-/preview/FABM7993.jpg"
        bg-position="72%"
        style="z-index: 2"
        overlay="left"
        @visible="showAllComponents()"
      >
        <template v-slot:title>
          Portraits
        </template>
        <template v-slot:description>
          Jouer avec la lumière et les ombres pour vous sublimer. Faire ressortir votre douceur, votre
          sensualité naturelle et même votre grain de folie. Et surtout vous faire tomber amoureux de
          vous-même.
        </template>
      </PrestationPreview>
      <PrestationPreview
        bg-image="https://ucarecdn.com/4efd8365-97c6-4668-ae45-b56fa9a922dc/-/preview/12copie.jpg"
        bg-position="44%"
        style="z-index: 3"
        overlay="foo"
        @visible="showAllComponents()"
      >
        <template v-slot:title>
          Familles<br>
          & Couples
        </template>
        <template v-slot:description>
          Et si nous faisions parler votre histoire lors d’une escapade dans un lieu qui vous
          ressemble ? Célébrons votre amour, votre complicité et vos liens de famille lors d’une
          séance photo pleine de vie !
        </template>
      </PrestationPreview>
      <ClientAreaPreview
        style="z-index: 4"
        @visible="freeSideSpaces()"
      />
    </template>
    <template v-slot:top>
      <ThemeStyle reactive>
        <WebsiteMark
          v-show="!hideWebsiteMark"
          slot-scope="{ theme }"
          :style="theme"
          class="mark"
        />
      </ThemeStyle>
    </template>
    <template v-slot:right>
      <SocialLinks v-show="!hideSocialLinks" orientation="vertical" />
    </template>
    <template v-slot:bottom>
      <ThemeStyle reactive>
        <span
          slot-scope="{ theme }"
          :style="theme"
          class="home__scroll-down"
        >DÉFILER VERS LE BAS</span>
      </ThemeStyle>
    </template>
    <template v-slot:left>
      <ScrollProgress v-show="!hideScrollProgress" />
    </template>
  </HomeLayout>
</template>

<script>
import { sync } from 'vuex-pathify'

import ClientAreaPreview from '@/views/ClientAreaPreview'
import HomeLayout from '@/layouts/HomeLayout'
import PrestationPreview from '@/views/PrestationPreview'
import ThemeStyle from '@/components/ThemeStyle'
import ScrollProgress from '@/components/ScrollProgress'
import SocialLinks from '@/components/SocialLinks'
import Startup from '@/views/Startup'
import WebsiteMark from '@/components/WebsiteMark'

export default {
  components: {
    ClientAreaPreview,
    HomeLayout,
    PrestationPreview,
    ThemeStyle,
    ScrollProgress,
    SocialLinks,
    Startup,
    WebsiteMark
  },

  data () {
    return {
      hideScrollProgress: true,
      hideSocialLinks: false,
      hideWebsiteMark: false
    }
  },

  computed: {
    themeMode: sync('ui/theme@mode')
  },

  methods: {
    onVisiblityChanged (isVisible) {
      this.hideScrollProgress = !isVisible
    },

    freeSideSpaces () {
      this.hideScrollProgress = true
      this.hideSocialLinks = true
      this.hideWebsiteMark = false
      this.themeMode = 'light'
    },

    keepOnlySocialLinks () {
      this.hideScrollProgress = true
      this.hideSocialLinks = false
      this.hideWebsiteMark = true
      this.themeMode = 'dark'
    },

    showAllComponents () {
      this.hideScrollProgress = false
      this.hideSocialLinks = false
      this.hideWebsiteMark = false
      this.themeMode = 'dark'
    }
  }
}
</script>

<style lang="scss" scoped>
.home__scroll-down {
  font-family: 'TT Commons';
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  line-height: 2.667em;
  color: var(--text-color);
  opacity: .87;
}
</style>
