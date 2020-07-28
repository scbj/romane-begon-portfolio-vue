<template>
  <div class="website-title" :class="{ large: size === 'large' }">
    <span class="website-title__subtitle">Photographie avec</span>
    <span class="website-title__title">ROMANE BÉGON</span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small'
    }
  }
}
</script>

<style lang="scss" scoped>
.website-title {
  font-weight: 400;
  font-family: "Orpheus Pro", serif;
  text-align: center;

  > span {
    display: block;
  }
}

.website-title__title {
  font-size: 2.5rem;
  line-height: 1.6em;
  letter-spacing: 0.14em;
  color: var(--text-color-2);
}

.website-title__subtitle {
  font-size: 1.2rem;
  line-height: 1.6667em;
  letter-spacing: 0.0517em;
  color: var(--text-color-3);
}

.website-title.large {
  .website-title__title {
    font-size: 7rem;
    font-weight: 700;
    color: var(--color-light-1);
  }

  .website-title__subtitle {
    font-size: 3.5rem;
    font-weight: 400;
    color: var(--color-light-2);
  }
}
</style>
