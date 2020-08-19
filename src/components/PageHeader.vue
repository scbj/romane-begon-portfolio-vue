<template>
  <header class="page-header">
    <BaseButton
      class="page-header__button"
      color="#0f0e0b"
      icon="cross"
      :icon-scale="1.111"
      :icon-fill="false"
      @click="goBack"
    />
    <div class="page-header__content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
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
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-right: 5rem;

  z-index: 1;

  @media screen and (min-width: $extraLarge) {
    background: transparent;
    padding: 68px;
    padding-right: 134px;
  }
}

.page-header__content {
  display: flex;
}
</style>
