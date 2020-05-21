<template>
  <div class="social-links">
    <svgicon
      icon="icon-facebook"
      color="#fff"
      height="20"
      width="20"
    />
    <svgicon
      icon="icon-instagram"
      color="#fff"
      height="20"
      width="20"
    />
    <svgicon
      icon="icon-pinterest"
      color="#fff"
      height="20"
      width="20"
    />
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
