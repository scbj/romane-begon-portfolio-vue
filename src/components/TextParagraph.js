import '@/assets/styles/paragraph.scss'

export default {
  functional: true,

  render (h, { data, listeners, slots }) {
    return (
      <p {...data} {...listeners}>
        { slots().default }
      </p>
    )
  }
}
