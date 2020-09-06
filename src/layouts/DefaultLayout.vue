<template>
  <ThemeStyle reactive>
    <div
      slot-scope="{theme}"
      class="default-layout"
      :style="theme"
    >
      <ParallaxContainer
        class="default-layout__content"
        tag="main"
        :perspective="220"
        @scroll="onScroll"
      >
        <slot />
      </ParallaxContainer>
      <aside class="default-layout__top">
        <WebsiteTitle v-show="displayWebsiteTitle" :style="theme" />
      </aside>
      <aside class="default-layout__right">
        <SocialLinks v-show="displaySocialLinks" orientation="vertical" />
      </aside>
      <aside class="default-layout__bottom">
        <span class="default-layout__scroll-down">DÉFILER VERS LE BAS</span>
      </aside>
      <aside v-if="gte('medium')" class="default-layout__left">
        <HomeProgressBar
          v-show="displayProgressBar"
          :active-index="activeSectionIndex"
          :percent="scrollPercent"
        />
      </aside>
    </div>
  </ThemeStyle>
</template>

<script>
import { sync } from 'vuex-pathify'
import { throttle } from '@bit/scbj.utils.throttle'

import ParallaxContainer from '@/components/parallax/ParallaxContainer'
import HomeProgressBar from '@/components/HomeProgressBar'
import SocialLinks from '@/components/SocialLinks'
import ThemeStyle from '@/components/ThemeStyle'
import WebsiteTitle from '@/components/WebsiteTitle'

import responsive from '@/mixins/responsive'

export default {
  components: {
    ParallaxContainer,
    HomeProgressBar,
    SocialLinks,
    ThemeStyle,
    WebsiteTitle
  },

  mixins: [responsive],

  data () {
    return {
      activeSectionIndex: 0,
      scrollPercent: 0
    }
  },

  computed: {
    themeMode: sync('ui/theme@mode'),

    options () {
      return {
        progressBar: [false, true, true, true, false, true, false],
        socialLinks: [true, true, true, true, false, true, false],
        websiteTitle: [false, true, true, true, true, false, true],
        darkTheme: [true, true, true, true, false, true, false]
      }
    },

    displayProgressBar () {
      return this.options.progressBar[this.activeSectionIndex]
    },

    displaySocialLinks () {
      return this.options.socialLinks[this.activeSectionIndex]
    },

    displayWebsiteTitle () {
      return this.options.websiteTitle[this.activeSectionIndex]
    }
  },

  watch: {
    activeSectionIndex: {
      immediate: true,
      handler (index) {
        this.themeMode = this.options.darkTheme[index] ? 'dark' : 'light'
      }
    }
  },

  methods: {
    onScroll: throttle(function (event) {
      const viewportHeight = window.innerHeight
      const { scrollHeight, scrollTop } = event.target
      this.activeSectionIndex = Math.round(scrollTop / viewportHeight)
      this.scrollPercent = Math.round((scrollTop + viewportHeight / 2) * 100 / scrollHeight)
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_mixins.scss';
@import '@/assets/styles/_vars.scss';

.default-layout {
  height: 100vh;
}

.default-layout__content {
  @include hide-scrollbar;
}

.default-layout__top {
  position: fixed;
  top: 1.667rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: $extraLarge) {
    top: 2.111rem;
  }
}

.default-layout__right {
  position: fixed;
  right: 2rem;
  top: 7rem;
  z-index: 10;

  @media screen and (min-width: $extraLarge) {
    right: 3.778rem;
    top: 50%;
    transform: translateY(-50%);
  }
}

.default-layout__bottom {
  position: fixed;
  bottom: 3.333rem;
  left: 50%;
  transform: translateX(-50%);
}

.default-layout__left {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 2.778rem;
  z-index: 10;

  @media screen and (min-width: $extraLarge) {
    left: 3.778rem;
  }
}

.default-layout__scroll-down {
  font-family: 'TT Commons';
  font-size: 0.667rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  line-height: 2.667em;
  color: var(--text-color);
  opacity: .87;
}
</style>
