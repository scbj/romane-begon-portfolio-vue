<template>
  <main class="main">
    <div class="main__container">
      <template v-for="(page, index) in prestations">
        <Prestation
          :key="index"
          class="main__section"
          :title="page.title"
          :description="page.description"
          :background-image="page.backgroundImage"
        />
      </template>
    </div>
    <div class="main__social-links">
      <div class="div" />
      <div class="div" />
      <div class="div" />
    </div>
    <div class="main__scroll-progress" />
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
    prestations: () => prestations
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

.main__container {
  grid-row: 1 / -1;
  grid-column: 1 / -1;

  overflow: auto;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.main__section {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.main__social-links {
  grid-row: 1 / -1;
  grid-column: 3 / 4;
  align-self: center;
  margin-right: 60px;

  > div {
    background: black;
    height: 10px;
    width: 10px;
    margin-bottom: 1rem;
  }
}

.main__scroll-progress {
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  background: black;
  height: 70vh;
  width: 20px;
  align-self: center;
  margin-left: 60px;
}
</style>
