<template>
  <ThemeStyle reactive :style="customProperties">
    <div
      slot-scope="{ theme }"
      class="page-layout"
      :style="theme"
    >
      <PageHeader>
        <slot name="header" />
      </PageHeader>
      <div class="page-layout__content">
        <slot />
      </div>
      <PageFooter :theme="theme" />
    </div>
  </ThemeStyle>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    PageHeader,
    PageFooter,
    ThemeStyle
  },

  props: {
    background: {
      type: String,
      default: 'white'
    }
  },

  computed: {
    customProperties () {
      return {
        '--background': this.background
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_vars.scss';

.page-layout {
  background: var(--background);

  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  transition: background .04s ease-out;
}

.page-layout__content {
  margin-top: 6rem;
}
</style>
