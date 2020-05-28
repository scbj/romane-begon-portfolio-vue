<template>
  <div class="app-layout">
    <div class="app-layout__page">
      <slot name="page" />
    </div>
    <div class="app-layout__header">
      <slot name="header" />
    </div>
    <div class="app-layout__footer">
      <slot name="footer" />
    </div>
    <div class="app-layout__button">
      <slot name="button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  align-items: stretch;
  justify-items: stretch;
  height: 100%;
}

.app-layout__page {
  grid-column: 1/3;
  grid-row: 1/4;
}

.app-layout__header {
  grid-column: 1/3;
  grid-row: 1/2;
}

.app-layout__footer {
  grid-column: 1/3;
  grid-row: 3/4;
}

.app-layout__button {
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: end;
}
</style>
