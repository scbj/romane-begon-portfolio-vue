<template>
  <BaseButton class="icon-text-button">
    <div class="icon-text-button__icon">
      <BaseIcon :name="icon" :size="iconSize" />
    </div>
    <div class="icon-text-button__text">
      <slot />
    </div>
  </BaseButton>
</template>

<script>
import responsive from '@/mixins/responsive'

export default {
  mixins: [responsive],

  props: {
    icon: {
      type: String,
      required: true
    }
  },

  computed: {
    iconSize () {
      if (this.lte('medium')) {
        return '8'
      } else if (this.lte('large')) {
        return '9'
      }
      return '10'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.icon-text-button {
  display: flex;
  align-items: center;

  &:hover .icon-text-button__icon {
    border-color: rgba(255,255,255,.6);
    transition-duration: 0;
  }
}

.icon-text-button__icon {
  border: 1px solid rgba(255,255,255, .4);
  border-radius: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 39px;

  transition: border-color .1s ease-out;

  @media screen and (min-width: $large) {
    height: 44px;
    width: 44px;
  }

  @media screen and (min-width: $extraLarge) {
    height: 49px;
    width: 49px;
  }
}

.icon-text-button__text {
  margin-left: 2.3rem;
}
</style>
