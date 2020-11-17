<template>
  <div class="prestation-counter">
    <span class="prestation-counter__actual">
      0{{ value }}
    </span>
    <i class="prestation-counter__separator" />
    <span class="prestation-counter__total">
      0{{ 7 }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.prestation-counter {
  font-size: 1.222rem;
  font-weight: 500;
  font-family: "Garamond Premier Pro Display", serif;
  line-height: 1.818em;
  letter-spacing: 0.0518em;
  display: grid;
  grid-template-columns: auto 2.111rem auto;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: stretch;
  gap: 0.667rem;
}

.prestation-counter__actual {
  color: var(--color-light-2);
}

.prestation-counter__total {
  color: var(--color-light-4)
}

.prestation-counter__separator {
  background: var(--color-light-4);
  height: 1px;
}
</style>
