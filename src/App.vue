<template>
  <div id="app">
    <WorkInProgress v-if="hideApp" />
    <router-view v-else />
  </div>
</template>

<script>
import WorkInProgress from '@/components/WorkInProgress.vue'

export default {
  components: {
    WorkInProgress
  },

  data () {
    return {
      hideApp: true
    }
  },

  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
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

<style lang="scss">
@import '@/assets/styles/base.scss';
@import '@/assets/styles/fonts.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: black;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
