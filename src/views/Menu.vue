<template>
  <div class="menu">
    <div class="image" />
    <div class="content-wrapper">
      <div class="website-mark">
        <span class="subtitle">Photographie avec</span>
        <span class="title">ROMANE BÉGON</span>
      </div>
      <ul class="navigation-list">
        <li><a href="#">Prestations</a></li>
        <li><a href="#">Espace Client</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">A propos</a></li>
      </ul>
      <div class="social-links" />
      <div class="copyright">
        <span>© Romane Bégon</span>
        <span>Tous droits réservés</span>
      </div>
      <div class="credits">
        CREDITS
      </div>
    </div>
    <div class="button-close" />
  </div>
</template>

<style lang="scss" scoped>
.menu {
 --color-light-1: #f3f3f3;
 --color-light-2: #e4e4e4;
 --color-light-3: #cccccc;

 --color-dark-1: #0f0e0b;

  color: var(--color-light-1);
  background: var(--color-dark-1);

  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 1fr;
  grid-template-areas:
    "image content";

  height: 100vh;
}

.image {
  background-image: url(/photos/photo-5-4.png);
  background-size: cover;
  background-position: right;
  grid-area: image;
}

.content-wrapper {
  grid-area: content;
  display: grid;
  grid-template-rows: auto 1fr repeat(2, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "mark"
    "nav"
    "social"
    "footer";

  margin-bottom: 6vh;
  margin-right: 68px;
  margin-left: 210px;
  margin-top: 14vh;
}

.website-mark {
  grid-area: mark;
  justify-self: left;

  span {
    font-weight: 400;
    font-family: "Orpheus Pro", serif;
    text-align: center;

    display: block;
  }

  .title {
    color: var(--color-light-2);
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 3.5px;
  }

  .subtitle {
    color: var(--color-light-3);
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.62px;
  }
}

.navigation-list {
  grid-area: nav;
  align-self: center;

  display: grid;
  grid-auto-rows: auto;
  gap: 3px;

  list-style: none;

  > li {
    font-size: 58px;
    font-weight: 500;
    font-family: "Orpheus Pro", serif;
    line-height: 95px;
    letter-spacing: 3.02px;
    text-align: left;

    > a {
      color: inherit;
      text-decoration: none;
    }
  }
}

.social-links {
  grid-area: social;
}

.copyright,
.credits {
  grid-area: footer;
}

.copyright {
  font-size: 22px;
  font-weight: 300;
  font-family: "Garamond Premier Pro Display", serif;
  line-height: 42px;
  letter-spacing: 1.14px;

  color: var(--color-light-2);

  margin-bottom: 11vh;

  span {
    display: block;
  }
}

.credits {
  font-size: 14px;
  font-weight: 500;
  font-family: "TT Commons", sans-serif;
  line-height: 32px;
  letter-spacing: 3.92px;

  align-self: end;
  justify-self: end;
}

</style>
