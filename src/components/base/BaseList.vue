<template>
  <ul class="base-list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="base-list__item"
    >
      <slot name="item" :item="item" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
