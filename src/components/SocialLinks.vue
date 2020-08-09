<template>
  <div class="social-links" :class="orientations">
    <template v-for="(link, index) in links">
      <BaseButton
        :key="index"
        color="white"
        :href="link.href"
        :icon="link.icon"
        :icon-scale="1.389"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    orientation: {
      type: String,
      default: 'horizontal'
    }
  },

  computed: {
    links () {
      return [
        {
          href: 'https://fr-fr.facebook.com/romane.begon.3',
          icon: 'facebook'
        },
        {
          href: 'https://instagram.com/romanebegon',
          icon: 'instagram'
        },
        {
          href: 'https://www.pinterest.fr/romanebegon',
          icon: 'pinterest'
        }
      ]
    },

    orientations () {
      return {
        'social-links--horizontal': this.orientation === 'horizontal',
        'social-links--vertical': this.orientation === 'vertical'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.social-links {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 1.111rem;

  > * {
    cursor: pointer;
  }
}

.social-links--vertical {
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  gap: 2.5rem;

  @media screen and (min-width: $extraLarge) {
    gap: 3.778rem;
  }
}
</style>
