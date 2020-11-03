<template>
  <footer class="page-footer">
    <SocialLinks
      class="page-footer__social"
      :color="textColor"
      :scale="1"
    />
    <CopyrightStatement class="page-footer__copyright" />
  </footer>
</template>

<script>
import CopyrightStatement from '@/components/CopyrightStatement'
import SocialLinks from '@/components/SocialLinks'

export default {
  components: {
    CopyrightStatement,
    SocialLinks
  },

  props: {
    theme: {
      type: Object,
      required: true
    }
  },

  computed: {
    textColor () {
      return this.theme && this.theme['--text-color']
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  background: rgba(black, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin-top: 4rem;
}

.page-footer__copyright {
  color: #1C1C1C;
  color: var(--text-color);
  text-align: center;
  font-size: 1rem;
  line-height: 1.4em;

  margin-top: 2rem;
}
</style>
