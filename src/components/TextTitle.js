import '@/assets/styles/headings.scss'

const defaultHeadingLevel = 4

export default {
  name: 'TextTitle',
  functional: true,

  props: {
    extraLarge: Boolean,
    large: Boolean,
    medium: Boolean,
    small: Boolean,
    extraSmall: Boolean
  },

  render (h, { data, listeners, props, slots }) {
    const getHeadingLevel = () => {
      if (props.extraLarge) return 1
      if (props.large) return 2
      if (props.medium) return 3
      if (props.small) return 4
      if (props.extraSmall) return 5

      return defaultHeadingLevel
    }

    // Construct the tag name
    const Heading = `h${getHeadingLevel()}`

    return (
      <Heading {...data} {...listeners}>
        { slots().default }
      </Heading>
    )
  }
}
