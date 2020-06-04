<template>
  <section class="client-area-preview">
    Some code
  </section>
</template>

<script>
import { call } from 'vuex-pathify'

export default {
  mounted () {
    this.loadLumysGalleries()
  },

  methods: {
    loadLumysGalleries: call('clientArea/loadLumysGalleries')
  }
}
</script>

<style lang="scss" scoped>
.client-area-preview {
  overflow: hidden;
  height:100vh;
  scroll-snap-align: center;
}

#lumys-widget {
  background: red;

  .lumys-widget-wrapper {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 375px));

  }
}
</style>
