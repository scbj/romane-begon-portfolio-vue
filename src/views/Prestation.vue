<template>
  <section class="prestation">
    <h2 class="prestation__title">
      {{ title }}
    </h2>
    <p class="prestation__description">
      {{ description }}
    </p>
  </section>
</template>

<script>
export default {
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
  padding: 60px;
}

.prestation__title {
  font-family: "Orpheus Pro", serif;
  font-weight: 700;
  font-size: 127px;
  letter-spacing: 3.68px;
}

.prestation__description {
  font-family: 'TT Commons';
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.3px;
}
</style>
