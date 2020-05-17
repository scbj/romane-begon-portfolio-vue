<template>
  <ul class="list-view">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="list-view__item"
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
