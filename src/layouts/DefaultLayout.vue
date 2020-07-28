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
      >
        <slot />
      </ParallaxContainer>
      <aside class="default-layout__top">
        <WebsiteTitle v-show="!options.hideWebsiteTitle" :style="theme" />
      </aside>
      <aside class="default-layout__right">
        <SocialLinks v-show="!options.hideSocialLinks" orientation="vertical" />
      </aside>
      <aside class="default-layout__bottom">
        <span class="default-layout__scroll-down">DÉFILER VERS LE BAS</span>
      </aside>
      <aside v-if="gte('medium')" class="default-layout__left">
        <HomeProgressBar v-show="!options.hideProgressBar" />
      </aside>
    </div>
  </ThemeStyle>
</template>

<script>
import { get } from 'vuex-pathify'

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

  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    themeMode: get('ui/theme@mode')
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
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: $extraLarge) {
    top: 3.8rem;
  }
}

.default-layout__right {
  position: fixed;
  right: 5rem;
  top: 14rem;
  z-index: 10;

  @media screen and (min-width: $extraLarge) {
    right: 6.8rem;
    top: 50%;
    transform: translateY(-50%);
  }
}

.default-layout__bottom {
  position: fixed;
  bottom: 6rem;
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
  left: 5rem;
  z-index: 10;

  @media screen and (min-width: $extraLarge) {
    left: 6.8rem;
  }
}

.default-layout__scroll-down {
  font-family: 'TT Commons';
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  line-height: 2.667em;
  color: var(--text-color);
  opacity: .87;
}
</style>
