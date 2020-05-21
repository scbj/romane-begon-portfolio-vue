<template>
  <div class="menu-cover">
    <img
      class="menu-cover__picture"
      src="/photos/photo-5-2.png"
      alt="Boat"
    >
  </div>
</template>

<style lang="scss" scoped>
.menu-cover {
  position: relative;
  overflow: hidden;
}

.menu-cover__picture {
  object-fit: cover;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
