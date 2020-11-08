<template>
  <component
    :is="componentTag"
    class="base-button"
    :class="classes"
    v-bind="params"
    :style="cssVariables"
    v-on="$listeners"
  >
    <div v-if="hasIcon" class="base-button__icon">
      <BaseIcon
        :color="color"
        :fill="iconFill"
        :name="icon"
        :size="iconSize"
      />
    </div>
    <span v-if="hasText" class="base-button__text">
      <template v-if="useSlot">
        <slot />
      </template>
      <template v-else>
        {{ text }}
      </template>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    circle: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#fff'
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iconFill: {
      type: Boolean,
      default: true
    },
    iconScale: {
      type: Number,
      default: 0.556
    },
    route: {
      type: Object,
      default: null
    },
    text: {
      type: String,
      default: ''
    }
  },

  computed: {
    componentTag () {
      if (this.href) return 'a'
      else if (this.route) return 'router-link'
      return 'button'
    },

    cssVariables () {
      return {
        '--color': this.color
      }
    },

    classes () {
      return {
        'base-button--simple': this.hasIcon ^ this.hasText,
        'base-button--circle': this.circle
      }
    },

    iconSize () {
      return `${this.iconScale}rem`
    },

    hasIcon () {
      return Boolean(this.icon)
    },

    hasText () {
      return Boolean(this.text || this.$slots.default)
    },

    params () {
      if (this.href) {
        return {
          href: this.href,
          target: '_blank'
        }
      }
      return {
        to: this.route
      }
    },

    useSlot () {
      return Boolean(this.$slots.default)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.base-button {
  color: var(--color);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.278rem;

  &.base-button--simple {
    display: block;
  }

  &.base-button--circle .base-button__icon {
    height: 2.944rem;
    width: 2.944rem;

    @media screen and (min-width: $medium) {
      height: 2.778rem;
      width: 2.778rem;
    }
  }

  &:hover.base-button--circle .base-button__icon {
    border-color: rgba(255,255,255,.9);
    transition-duration: 0;
  }
}

.base-button__icon {
  border-radius: 2.722rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-button--circle .base-button__icon {
  border: 1px solid rgba(255,255,255, .6);

  transition: border-color .1s ease-out;
}

.base-button__text {
  font-size: 0.889rem;
  font-weight: 600;
  font-family: "TT Commons", sans-serif;
  line-height: 2.286em;
  letter-spacing: 0.28em;
  padding: 0.3em 0;
}
</style>
