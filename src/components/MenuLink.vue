<template>
  <a class="menu-link" :href="route">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-link {
  font-size: 58px;
  font-weight: 500;
  font-family: "Orpheus Pro", serif;
  line-height: 95px;
  letter-spacing: 3.02px;
}
</style>
