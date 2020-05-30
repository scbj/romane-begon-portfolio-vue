<template>
  <StartupLayout class="startup">
    <template v-slot:background>
      <div class="startup__background">
        <div class="startup__background-picture" />
        <div class="startup__background-overlay" />
      </div>
    </template>

    <template v-slot:content>
      <div class="startup__content">
        <WebsiteMark size="large" />
        <div class="startup__content-citation">
          <span class="sentence-1">« Une photographie, c'est un fragment de temps qui ne reviendra pas. »</span>
          <span class="sentence-2">Martine Franck</span>
        </div>
      </div>
    </template>
  </StartupLayout>
</template>

<script>
import WebsiteMark from '@/components/WebsiteMark'
import StartupLayout from '@/layouts/StartupLayout'

export default {
  components: {
    StartupLayout,
    WebsiteMark
  }
}
</script>

<style lang="scss" scoped>
.startup__background {
  display: grid;
  width: 100%;
  height: 100%;
}

.startup__background-picture,
.startup__background-overlay {
  grid-column: 1/2;
  grid-row: 1/2;
}

.startup__background-picture {
  background-image: url(/photos/site67.jpg);
  background-size: cover;
  background-position: 63%;
  background-repeat: no-repeat;
}

.startup__background-overlay {
  background: linear-gradient(0deg, rgba(15,14,11,0.4009978991596639) 0%, rgba(15,14,11,0.05926120448179273) 100%)
}

.startup__content {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.startup__content-citation {
  font-family: "Garamond Premier Pro Display", serif;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.5em;
  letter-spacing: 0.052em;
  text-align: center;
  color: #F3F3F3;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.73em;

  > span {
    margin-top: 0.682em;

    &:first-of-type {
      margin-top: 0;
    }

    &.sentence-1 {
      font-style: italic;
    }

    &.sentence-2 {
      margin-top: 0.1em;
    }
  }
}
</style>
