<template>
  <div class="app-viewer">
    <div class="app-viewer__counter">
      07 / 96
    </div>
    <div class="app-viewer__carousel" />
    <div class="app-viewer__thumbnails" />
    <div class="app-viewer__controls">
      <div class="icon-sun" />
      <div class="icon-fullscreen" />
    </div>
    <div class="app-viewer__previous" />
    <div class="app-viewer__next" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.app-viewer {
  color: var(--color-light-1);
  background: var(--color-dark-1);

  $side-size: 8.889rem;
  display: grid;
  grid-template-columns:
    [first carousel-start] minmax(0, 1fr)
    [next-button] minmax(0, 1fr) [carousel-end last];
  grid-template-rows:
    [first controls] 6.722rem
    [carousel-start] 1fr
    [carousel-end] auto [last];
  gap: 0.667rem;
  height: 100%;

  @media screen and (min-width: $medium) {
    grid-template-columns:
      [first] minmax($side-size, auto)
      [carousel-start] 1fr
      [carousel-end next-button] minmax($side-size, auto) [last];
    grid-template-rows:
      [first carousel-start] auto
      1fr
      [controls] auto
      [carousel-end] auto;
    padding: 2.222rem 0;
  }
}

.app-viewer__carousel {
  background: red;
  grid-column: carousel-start / carousel-end;
  grid-row: carousel-start / carousel-end;
}

.app-viewer__thumbnails {
  background: blue;
  grid-column: first / last;
  grid-row: carousel-end / last;
  height: 130px;
}

.app-viewer__next,
.app-viewer__previous  {
  background: green;
  height: 12px;
  width: 12px;
  align-self: center;
}

.app-viewer__next {
  grid-row: carousel-start / carousel-end;
  grid-column: next-button;
  justify-self: end;
}

.app-viewer__previous {
  grid-row: carousel-start / carousel-end;
  grid-column: first;
  justify-self: start;
}

.app-viewer__counter {
  grid-column: first;
  grid-row: first;
}

.app-viewer__controls {
  grid-row: controls;
  grid-column: next-button;
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  gap: 0.556rem;
  margin-right: 68px;

  .icon-sun,
  .icon-fullscreen {
    background: pink;
    height: 20px;
    width: 20px;
  }
}
</style>
