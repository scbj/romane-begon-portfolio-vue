<template>
  <div v-if="hideApp" class="work-in-progress">
    Work in progress
  </div>
</template>

<script>
export default {
  data () {
    return {
      hideApp: false
    }
  },

  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    this.onResize()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize () {
      if (window.innerWidth < 1400) {
        this.hideApp = true
      } else if (this.hideApp) {
        this.hideApp = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.work-in-progress {
  font-size: 60px;
  font-weight: 500;
  font-family: "Orpheus Pro", serif;
  line-height: 95px;
  letter-spacing: 3.02px;
  text-align: left;

  color: white;
  background: black;

  padding: 4rem;
  padding-top: 20rem;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
