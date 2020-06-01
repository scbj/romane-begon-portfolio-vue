<template>
  <HomeLayout class="home">
    <template v-slot:content>
      <Startup
        style="z-index: 0"
        @visible="hideScrollProgress = true"
      />
      <PrestationPreview
        bg-image="/photos/site37.jpg"
        style="z-index: 1"
        overlay="left"
        @visible="hideScrollProgress = false"
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
        bg-image="/photos/FABM7993.jpg"
        bg-position="72%"
        style="z-index: 2"
        overlay="left"
        @visible="hideScrollProgress = false"
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
        bg-image="/photos/12copie.jpg"
        bg-position="44%"
        style="z-index: 3"
        overlay="foo"
        @visible="hideScrollProgress = false"
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
      <Startup
        style="z-index: 2"
        @visible="hideScrollProgress = true"
      />
      <Startup
        style="z-index: 3"
        @visible="hideScrollProgress = true"
      />
      <Startup
        style="z-index: 4"
        @visible="hideScrollProgress = true"
      />
    </template>
    <template v-slot:top>
      <WebsiteMark class="mark" />
    </template>
    <template v-slot:right>
      <SocialLinks orientation="vertical" />
    </template>
    <template v-slot:bottom>
      <span class="home__scroll-down">DÉFILER VERS LE BAS</span>
    </template>
    <template v-slot:left>
      <ScrollProgress v-show="!hideScrollProgress" />
    </template>
  </HomeLayout>
</template>

<script>

import HomeLayout from '@/layouts/HomeLayout'
import PrestationPreview from '@/views/PrestationPreview'
import ScrollProgress from '@/components/ScrollProgress'
import SocialLinks from '@/components/SocialLinks'
import Startup from '@/views/Startup'
import WebsiteMark from '@/components/WebsiteMark'

export default {
  components: {
    HomeLayout,
    PrestationPreview,
    ScrollProgress,
    SocialLinks,
    Startup,
    WebsiteMark
  },

  data () {
    return {
      hideScrollProgress: true
    }
  },

  methods: {

    onVisiblityChanged (isVisible) {
      this.hideScrollProgress = !isVisible
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
  color: var(--color-light-1);
  opacity: .87;
}
</style>
