<template>
  <MenuLayout class="menu">
    <template v-slot:left>
      <div class="image" />
    </template>
    <template v-slot:right>
      <div class="content-wrapper">
        <WebsiteMark />
        <ListView :items="navigationLinks" class="navigation-list">
          <template v-slot:item="{ item }">
            <MenuLink :route="item.path">
              {{ item.label }}
            </MenuLink>
          </template>
        </ListView>
        <SocialLinks class="social" />
        <CopyrightStatement class="copyright" />
        <TextButton class="credits">
          CREDITS
        </TextButton>
      </div>
    </template>
    <template v-slot:button>
      <div class="button-close" />
    </template>
  </MenuLayout>
</template>

<script>
import CopyrightStatement from '@/components/CopyrightStatement'
import ListView from '@/components/ListView'
import MenuLayout from '@/layouts/MenuLayout'
import MenuLink from '@/components/MenuLink'
import SocialLinks from '@/components/SocialLinks'
import TextButton from '@/components/TextButton'
import WebsiteMark from '@/components/WebsiteMark'

import { navigationLinks } from '@/assets/data/menu'

export default {
  components: {
    CopyrightStatement,
    ListView,
    MenuLayout,
    MenuLink,
    SocialLinks,
    TextButton,
    WebsiteMark
  },

  computed: {
    navigationLinks: () => navigationLinks
  }
}
</script>

<style lang="scss" scoped>
.menu {
 --color-light-1: #f3f3f3;
 --color-light-2: #e4e4e4;
 --color-light-3: #cccccc;

 --color-dark-1: #0f0e0b;

  color: var(--color-light-1);
  background: var(--color-dark-1);
}

.image {
  background-image: url(/photos/photo-5-4-min.png);
  background-size: cover;
  background-position: right;
}

.content-wrapper {
  display: grid;
  grid-template-rows: auto 1fr repeat(2, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "mark"
    "nav"
    "social"
    "footer";
}

.website-mark {
  grid-area: mark;
  justify-self: left;
}

.navigation-list {
  grid-area: nav;
  align-self: center;

  display: grid;
  grid-auto-rows: auto;
  gap: 0.3rem;
}

.social {
  grid-area: social;
}

.copyright,
.credits {
  grid-area: footer;
}

.credits {
  align-self: end;
  justify-self: end;
}

</style>
