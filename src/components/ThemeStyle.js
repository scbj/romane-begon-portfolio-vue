import { get } from 'vuex-pathify'

export default {
  name: 'ThemeStyle',

  props: {
    mode: {
      type: String,
      default: 'dark'
    },
    reactive: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    reactiveMode: get('ui/theme@mode'),

    cssVariables () {
      switch (this.reactive ? this.reactiveMode : this.mode) {
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
        '--text-color': '#000',
        '--text-color-2': '#0f0e0b',
        '--text-color-3': '#1C1C1C'
      }
    }
  },

  render () {
    // Use render function to be able to return the slot directly.
    // a.k.a. Renderless
    return this.$scopedSlots.default({
      theme: this.cssVariables
    })
  }
}
