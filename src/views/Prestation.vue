<template>
  <section class="prestation">
    <img
      :src="backgroundImage"
      alt="background image"
      class="prestation__background"
    >
    <div class="prestation__overlay" />
    <PrestationCounter class="prestation__counter" />
    <h2 class="prestation__title">
      {{ title }}
    </h2>
    <p class="prestation__description">
      {{ description }}
    </p>
  </section>
</template>

<script>
import PrestationCounter from '@/components/PrestationCounter'

export default {
  components: {
    PrestationCounter
  },

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      prestationCount: 7,
      prestationNumber: 2
    }
  },

  created () {
    // To use counter :
    // registerPrestationToTheStore()
  },

  beforeDestroy () {
    // unregisterPrestationToTheStore()
  }
}
</script>

<style lang="scss" scoped>
.prestation {
  color: #f3f3f3;
  display: grid;
  grid-template-rows: 1fr repeat(4, auto) 1fr;
  grid-template-columns: 433px 1fr;
  justify-items: flex-start;
  text-align: left;
}

.prestation__title {
  font-family: "Orpheus Pro", serif;
  font-weight: 700;
  font-size: 127px;
  letter-spacing: 3.68px;
  line-height: 2em;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
}

.prestation__description {
  font-family: 'TT Commons';
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 0.512px;
  grid-row: 4 / 5;
  grid-column: 2 / 3;
  max-width: 428px;
}

.prestation__background {
  width: 100%;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-size: cover;
}

.prestation__counter {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}

.prestation__overlay {
  width: 100%;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background: linear-gradient(90deg, rgba(15,14,11,0.96) 10%, rgba(15,14,11,0.06) 56%);;
}
</style>
