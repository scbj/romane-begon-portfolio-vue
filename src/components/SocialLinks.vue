<template>
  <div class="social-links">
    <BaseIcon name="facebook" />
    <BaseIcon name="instagram" />
    <BaseIcon name="pinterest" />
  </div>
</template>

<style lang="scss" scoped>
.social-links {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 20px;

  > * {
    cursor: pointer;
  }
}
</style>
