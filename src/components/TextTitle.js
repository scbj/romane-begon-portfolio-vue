import '@/assets/styles/headings.scss'

const defaultHeadingLevel = 4

export default {
  functional: true,

  props: {
    level: {
      type: Number,
      default: defaultHeadingLevel
    }
  },

  render (h, { data, listeners, props, slots }) {
    // Construct the tag name
    const Heading = `h${props.level > 0 && props.level < 7
      ? props.level
      : defaultHeadingLevel}`

    return (
      <Heading {...data} {...listeners}>
        { slots().default }
      </Heading>
    )
  }
}
