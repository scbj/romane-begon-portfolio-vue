<template>
  <ThemeStyle mode="light">
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
      <PageFooter />
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

  mounted () {
    this.$store.set('ui/theme@mode', 'light')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/_vars.scss';

.page-layout {
  background: white;

  min-height: 100%;
  position: relative;
}

.page-layout__content {
  margin-top: 6rem;
}
</style>
