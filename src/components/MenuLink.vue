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
  font-size: 5.8rem;
  font-weight: 500;
  font-family: "Orpheus Pro", serif;
  line-height: 1.64em;
  letter-spacing: 0.05207em;
}
</style>
