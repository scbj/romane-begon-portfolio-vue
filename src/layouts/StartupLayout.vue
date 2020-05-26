<template>
  <div class="startup-layout">
    <div class="startup-layout__background">
      <slot name="background" />
    </div>
    <div class="startup-layout__content">
      <slot name="content" />
    </div>
    <div class="startup-layout__fixed">
      <slot name="fixed" />
    </div>
    <div class="startup-layout__button">
      <slot name="button" />
    </div>
    <div class="startup-layout__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.startup-layout {
  display: grid;
  min-height: 100vh;
  align-items: stretch;
  justify-items: stretch;
}

.startup-layout__background,
.startup-layout__content,
.startup-layout__fixed,
.startup-layout__button,
.startup-layout__footer {
  grid-column: 1/2;
  grid-row: 1/2;
}

.startup-layout__fixed {
  position: fixed;
  top: 14rem;
  right: 5rem;

  @media screen and (min-width: $extraLarge) {
    right: 68px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.startup-layout__button {
  position: fixed;
  right: 5rem;
  top: 5rem;

  @media screen and (min-width: $extraLarge) {
    right: 68px;
    top: 68px;
  }
}

.startup-layout__footer {
  align-self: end;
  justify-self: center;
  margin-bottom: 6rem;
}

.startup-layout__content {
  padding-top: 44vh;

  @media screen and (min-width: $extraLarge) {
    padding-top: 43vh;
  }

  @media screen and (max-height: $medium) {
    padding-top: 38vh;
  }
}
</style>
