<template>
  <div class="menu-panel">
    <WebsiteTitle class="menu-panel__website-title" />
    <BaseList :items="navigationLinks" class="menu-panel__list">
      <template #item="{ item }">
        <a :href="item.path" class="menu-panel__link">
          {{ item.label }}
        </a>
      </template>
    </BaseList>
    <SocialLinks class="menu-panel__social" />
    <CopyrightStatement class="menu-panel__copyright" />
    <BaseButton
      class="menu-panel__credits"
      color="white"
      text="CREDITS"
    />
  </div>
</template>

<script>
import CopyrightStatement from '@/components/CopyrightStatement'
import BaseList from '@/components/base/BaseList'
import SocialLinks from '@/components/SocialLinks'
import WebsiteTitle from '@/components/WebsiteTitle'

import { navigationLinks } from '@/assets/data/menu'

export default {
  components: {
    CopyrightStatement,
    BaseList,
    SocialLinks,
    WebsiteTitle
  },

  computed: {
    navigationLinks: () => navigationLinks
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.menu-panel {
  display: grid;
  grid-template-rows: auto 1fr repeat(2, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "nav"
    "social"
    "footer";
  padding: 5rem;

  @media screen and (min-width: $extraLarge) {
    padding-bottom: 6vh;
    padding-left: 110px;
    padding-right: 68px;
    padding-top: 14vh;
  }
}

.menu-panel__website-title {
  grid-area: title;
}

.menu-panel__list {
  grid-area: nav;
  align-self: center;

  display: grid;
  grid-auto-rows: auto;
  gap: 0.3rem;
}

.menu-panel__website-title,
.menu-panel__list {
  justify-self: center;

  @media screen and (min-width: $extraLarge) {
    justify-self: left;
  }
}

.menu-panel__social {
  grid-area: social;
  margin-bottom: 4rem;
}

.menu-panel__copyright,
.menu-panel__credits {
  grid-area: footer;
}

.menu-panel__credits {
  align-self: end;
  justify-self: end;
}

.menu-panel__link {
  font-size: 5.8rem;
  font-weight: 500;
  font-family: "Orpheus Pro", serif;
  line-height: 1.64em;
  letter-spacing: 0.05207em;
}
</style>
