<template>
  <ThemeStyle mode="light">
    <div
      slot-scope="{ theme }"
      class="go-back-layout"
      :style="theme"
    >
      <header class="go-back-layout__header">
        <BaseButton
          class="go-back-layout__button"
          :color="theme['--text-color']"
          icon="cross"
          :icon-scale="2"
          :icon-fill="false"
          @click="goBack"
        />
        <div class="go-back-layout__header-content">
          <slot name="header" />
        </div>
      </header>
      <div class="go-back-layout__content">
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
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.go-back-layout {
  background: white;
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

.go-back-layout__header {
  background: rgba(white, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  margin-right: 5rem;
}

.go-back-layout__content {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</style>
