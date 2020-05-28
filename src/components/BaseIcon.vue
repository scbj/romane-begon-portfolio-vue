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
      type: String,
      default: '20'
    }
  },

  computed: {
    iconName () {
      return `icon-${this.name}`
    }
  }
}
</script>
