<template>
  <div class="scroll-progress" :style="cssVariables">
    <div class="scroll-progress__indicator-background" />
    <div class="scroll-progress__indicator" />

    <template v-for="(page, index) in pages">
      <!-- Page numbers -->
      <span :key="'index' + index" class="scroll-progress__index">
        0{{ index + 1 }}
      </span>

      <!-- Labels -->
      <span
        :key="'label-' + index"
        class="scroll-progress__label"
      >
        {{ page.toUpperCase() }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0
    }
  },

  computed: {
    pages: () => [
      'Accueil',
      'Mariages',
      'Portrait',
      'Familles &\n Couples',
      'A propos',
      'Contact',
      'Espace\n Client'
    ],

    cssVariables () {
      return {
        '--row-count': this.pages.length
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-progress {
  font-family: "Garamond Premier Pro Display", serif;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1.38px;
  line-height: 23px;
  white-space: pre;
  color: #cccccc;

  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto;
  column-gap: 28px;
}

.scroll-progress__indicator,
.scroll-progress__indicator-background {
  grid-column: 2 / 3;
  grid-row: 1 / calc(var(--row-count) + 1);
  width: 1px;
}

.scroll-progress__indicator {
  background: #cccccc;
  transform: scaleY(0.2);
  transform-origin: 50% 0%;
}

.scroll-progress__indicator-background {
  background: #666666;
}

.scroll-progress__label {
  text-align: left;
  margin-bottom: 82px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
}

.scroll-progress__index {
  text-align: right;
}
</style>
