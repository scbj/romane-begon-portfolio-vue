<template>
  <div class="startup">
    <div class="picture" />
    <div class="picture-overlay" />
    <WebsiteMark class="mark" size="large" />
    <div class="citation">
      <span class="sentence-1">Partager des souvenirs</span>
      <span class="sentence-2">Photographe de mariage en France et en Europe</span>
      <span class="sentence-3">2020</span>
    </div>
    <span class="scroll-down">DÉFILER VERS LE BAS</span>
    <BaseIcon
      class="menu-button"
      name="menu"
      :fill="false"
      :size="21"
    />
    <SocialLinks class="social" orientation="vertical" />
  </div>
</template>

<script>
import SocialLinks from '@/components/SocialLinks'
import WebsiteMark from '@/components/WebsiteMark'

export default {
  components: {
    SocialLinks,
    WebsiteMark
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.startup {
  display: grid;
  grid-template-rows: 62% 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
  justify-items: center;
  position: relative;

  > * {
    grid-column: 1;
  }
}

.picture,
.picture-overlay {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
}

.picture {
  background-image: url(/photos/site67.jpg);
  background-size: cover;
  background-position: 63%;
  background-repeat: no-repeat;
}

.picture-overlay {
  background: linear-gradient(0deg, rgba(15,14,11,0.4009978991596639) 0%, rgba(15,14,11,0.05926120448179273) 100%)
}

.mark {
  grid-row: 1;
  grid-column: 1;
  align-self: end;
  color: #F3F3F3;
}

.citation {
  font-family: "Garamond Premier Pro Display", serif;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.5em;
  letter-spacing: 0.052em;
  color: #F3F3F3;

  grid-row: 2;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.73em;

  > span {
    margin-top: 0.682em;

    &:first-of-type {
      margin-top: 0;
    }
  }
}

.scroll-down {
  font-family: 'TT Commons';
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  line-height: 2.667em;

  grid-row: 3;
  margin-bottom: 6rem;
  color: #F3F3F3;
  opacity: .87;
}

.menu-button {
  position: fixed;
  right: 5rem;
  top: 5rem;

  @media screen and (min-width: $extraLarge) {
    right: 68px;
    top: 68px;
  }
}

.social {
  position: fixed;
  top: 14rem;
  right: 5rem;

  @media screen and (min-width: $extraLarge) {
    right: 68px;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>
