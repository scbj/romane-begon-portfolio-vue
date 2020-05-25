<template>
  <svgicon
    class="base-icon"
    :icon="iconName"
    color="#fff"
    :height="size"
    :width="size"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  // inheritAttrs: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 20
    }
  },

  computed: {
    iconName () {
      return `icon-${this.name}`
    }
  }
}
</script>
