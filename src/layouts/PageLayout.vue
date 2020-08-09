<template>
  <ThemeStyle mode="light">
    <div
      slot-scope="{ theme }"
      class="page-layout"
      :style="theme"
    >
      <header class="page-layout__header">
        <BaseButton
          class="page-layout__button"
          :color="theme['--text-color']"
          icon="cross"
          :icon-scale="1.111"
          :icon-fill="false"
          @click="goBack"
        />
        <div class="page-layout__header-content">
          <slot name="header" />
        </div>
      </header>
      <div class="page-layout__content">
        <slot />
      </div>
    </div>
  </ThemeStyle>
</template>

<script>
import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    ThemeStyle
  },

  mounted () {
    this.$store.set('ui/theme@mode', 'light')
  },

  methods: {
    goBack () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
.page-layout {
  background: white;
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

.page-layout__header {
  background: rgba(white, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.778rem;
  margin-right: 2.778rem;
}

.page-layout__header-content {
  display: flex;
}
</style>
