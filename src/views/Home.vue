<template>
  <HomeLayout class="home">
    <template v-slot:content>
      <Startup style="z-index: 0" />
      <Intersect
        :threshold="[0.5]"
        @enter="onEnter"
        @leave="onLeave"
      >
        <PrestationPreview style="z-index: 1" />
      </Intersect>
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
import Intersect from 'vue-intersect'

import HomeLayout from '@/layouts/HomeLayout'
import PrestationPreview from '@/views/PrestationPreview'
import ScrollProgress from '@/components/ScrollProgress'
import SocialLinks from '@/components/SocialLinks'
import Startup from '@/views/Startup'
import WebsiteMark from '@/components/WebsiteMark'

export default {
  components: {
    HomeLayout,
    Intersect,
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
    onEnter () {
      console.log('enter')
      this.hideScrollProgress = false
    },

    onLeave () {
      console.log('leave')
      this.hideScrollProgress = true
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
