<template>
  <main class="main">
    <template v-for="(page, index) in prestations">
      <Prestation
        :key="index"
        class="main__section"
        :title="page.title"
        :description="page.description"
        :background-image="page.backgroundImage"
      />
    </template>
  </main>
</template>

<script>
import Prestation from '@/views/Prestation.vue'
import prestations from '@/assets/data/prestations.json'

export default {
  components: {
    Prestation
  },

  computed: {
    prestations () {
      return prestations
    }
  }
}
</script>

<style lang="scss" scoped>
.main__section {
  height: 100vh;
}
</style>
