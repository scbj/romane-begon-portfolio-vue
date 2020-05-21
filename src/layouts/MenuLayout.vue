<template>
  <div class="menu-layout">
    <div class="menu-layout__left">
      <slot name="left" />
    </div>
    <div class="menu-layout__right">
      <slot name="right" />
    </div>
    <div class="menu-layout__button">
      <slot name="button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-layout {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr;
  grid-template-areas:
    "left right";

  height: 100vh;
}

.menu-layout__left {
  grid-area: left;
  display: grid;
}

.menu-layout__right {
  grid-area: right;
  display: grid;

  padding-bottom: 6vh;
  padding-right: 68px;
  padding-left: 110px;
  padding-top: 14vh;
}

.menu-layout__button {
  /* grid-area: button; */
}
</style>
