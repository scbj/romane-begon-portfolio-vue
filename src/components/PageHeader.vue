<template>
  <ThemeStyle reactive>
    <header
      slot-scope="{ theme }"
      class="page-header"
      :style="customProperties"
    >
      <BaseButton
        class="page-header__button"
        :color="theme['--text-color']"
        icon="arrow"
        :icon-scale="1.9"
        :icon-fill="false"
        @click="goBack"
      />
      <div class="page-header__content">
        <slot />
      </div>
    </header>
  </ThemeStyle>
</template>

<script>
import { get } from 'vuex-pathify'

import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    ThemeStyle
  },

  computed: {
    themeMode: get('ui/theme@mode'),

    customProperties () {
      return {
        '--background': this.themeMode === 'dark' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)'
      }
    }
  },

  methods: {
    goBack () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.page-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--background);
  backdrop-filter: blur(13px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-right: 5rem;

  z-index: 1;

  @media screen and (min-width: $extraLarge) {
    background: transparent;
    backdrop-filter: none;
    padding: 68px;
    padding-right: 134px;
  }
}

.page-header__button {
  transition: transform .27s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transition-duration: .13s;
    transform: translateX(-0.3em);
  }
}

.page-header__content {
  display: flex;
}
</style>
