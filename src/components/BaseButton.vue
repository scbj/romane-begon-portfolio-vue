<script>
export default {
  render () {
    return (
      <button class="base-button" attrs={this.$attrs} on={this.$listeners}>
        { this.$slots.default }
      </button>
    )
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "TT Commons", sans-serif;
  line-height: 2.286em;
  letter-spacing: 0.28em;
}
</style>
