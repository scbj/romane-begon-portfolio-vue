<template>
  <transition
    name="foo"
    appear
  >
    <div class="home-progress-bar" :style="cssVariables">
      <div class="home-progress-bar__indicator-background" />
      <div class="home-progress-bar__indicator" />

      <template v-for="(page, index) in pages">
        <!-- Page numbers -->
        <span :key="'index' + index" class="home-progress-bar__index">
          0{{ index + 1 }}
        </span>

        <!-- Labels -->
        <span
          :key="'label-' + index"
          class="home-progress-bar__label"
          @click="scrollIntoView(index)"
        >
          {{ page.toUpperCase() }}
        </span>
      </template>
    </div>
  </transition>
</template>

<script>
// TODO: Use IntersectionObserver instead of scroll event
import { throttle } from '@bit/scbj.utils.throttle'

export default {
  data () {
    return {
      activeIndex: 0,
      percentComplete: 0
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
        '--row-count': this.pages.length,
        '--scale-y': this.percentComplete
      }
    }
  },

  mounted () {
    document.querySelector('main').addEventListener('scroll', this.updateIndicator)
  },

  beforeDestroy () {
    document.querySelector('main').removeEventListener('scroll', this.updateIndicator)
  },

  methods: {
    updateIndicator: throttle(function (event) {
      const scrollTop = event.target.scrollTop
      const scrollHeight = event.target.scrollHeight
      this.percentComplete = scrollTop / scrollHeight + 0.065
    }, 100),

    scrollIntoView (index) {
      this.activeIndex = index
      const sections = document.querySelectorAll('main section')
      sections[index].scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-progress-bar {
  font-family: "Garamond Premier Pro Display", serif;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  line-height: 1.438em;
  white-space: pre;
  color: #cccccc;

  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto;
  column-gap: 28px;
}

.home-progress-bar__indicator,
.home-progress-bar__indicator-background {
  grid-column: 2 / 3;
  grid-row: 1 / calc(var(--row-count) + 1);
  width: 1px;
}

.home-progress-bar__indicator {
  background: #cccccc;
  transform: scaleY(var(--scale-y));
  transform-origin: 50% 0%;
  transition: transform .2s ease-out;
}

.home-progress-bar__indicator-background {
  background: rgba(#cccccc, .2);
}

.home-progress-bar__label {
  text-align: left;
  margin-bottom: 82px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
}

.home-progress-bar__index {
  text-align: right;
}

.foo-enter-active,
.foo-leave-active {
  transition: transform .1s ease-out;
}

.foo-enter,
.foo-leave-to {
  transform: translateX(-1rem) scale(0.995);
  opacity: 0;
}
</style>
