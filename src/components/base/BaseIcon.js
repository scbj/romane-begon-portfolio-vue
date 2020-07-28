export default {
  name: 'BaseIcon',
  functional: true,

  props: {
    color: {
      type: String,
      default: '#fff'
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '20'
    }
  },

  render (h, { props, data, listeners }) {
    return (
      <SvgIcon
        class="base-icon"
        icon={`icon-${props.name}`}
        color={props.color}
        height={props.size}
        width={props.size}
        {...data}
        {...listeners}
      />
    )
  }
}
