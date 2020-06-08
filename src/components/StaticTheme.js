export default {
  name: 'StaticTheme',

  props: {
    mode: {
      type: String,
      required: true
    }
  },

  computed: {
    cssVariables () {
      switch (this.mode) {
        case 'dark': return this.dark
        case 'light': return this.light
        default: return {}
      }
    },

    dark () {
      return {
        '--text-color': '#f3f3f3',
        '--text-color-2': '#e4e4e4',
        '--text-color-3': '#cccccc'
      }
    },

    light () {
      return {
        '--text-color': '#000'
      }
    }
  },

  watch: {
    mode: {
      handler: 'injectVariables'
    }
  },

  mounted () {
    this.injectStyle()
  },

  methods: {
    injectStyle () {
      if (this.$slots.default?.length > 0) {
        // To add a CSS Variable to an element
        const variableInjector = el => entry => el.style.setProperty(...entry)

        // Do v-bind:style stuff (somewhat)
        return Object
          .entries(this.cssVariables)
          .forEach(variableInjector(this.$slots.default[0].elm))
      }
    }
  },

  render () {
    // Use render function to be able to return the slot directly.
    // a.k.a. Renderless
    return this.$scopedSlots.default({
      mode: this.mode,
      theme: this.cssVariables
    })
  }
}
