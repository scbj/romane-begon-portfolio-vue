<template>
  <header class="page-header">
    <BaseButton
      class="page-header__button"
      color="#0f0e0b"
      icon="arrow"
      :icon-scale="1.9"
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
  background: rgba(white, 0.9);
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
