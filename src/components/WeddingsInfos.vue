<template>
  <div class="weddings-infos">
    <section class="weddings-infos__hero">
      <h1>Mariages</h1>
      <div class="weddings-infos__hero-content">
        <div class="weddings-infos__hero-introduction">
          <blockquote>Vous n’avez qu’à vivre et la vie vous donnera des images.</blockquote>
          <p>Henri Cartier-Bresson</p>
          <p>
            Vous avez décidé de concrétiser votre amour en vous unissant et il est important pour vous
            d’immortaliser cette belle journée à travers des photographies chaleureuses. Je serai ravie
            de vous accompagner tout au long de cette folle aventure avec un style et un œil qui m’est
            propre. L’émotion, l’amour, la douceur et la sensualité sont cœur de mon travail.
          </p>
        </div>
        <div class="weddings-infos__hero-gallery" />
      </div>
    </section>
    <section class="weddings-infos__flow">
      <template
        v-for="(step, index) in flowSteps"
      >
        <div :key="`a-${index}`" class="weddings-infos__flow-step-illustration" />
        <div :key="`b-${index}`" class="weddings-infos__flow-step-dot" />
        <div :key="`c-${index}`" class="weddings-infos__flow-step-content">
          <h3>{{ step.title }}</h3>
          <p>{{ step.content }}</p>
        </div>
      </template>
    </section>
    <section class="weddings-infos__plans">
      <h2>Mes autres offres</h2>
      <p>Pour un reportage de mariages complets</p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    flowSteps () {
      return [
        {
          title: '1. La rencontre',
          image: '',
          content: 'Il est essentiel pour moi de venir à votre rencontrer et de prendre le temps de vous découvrir autour d’un verre. Un moment d’échanges important qui me permettra de connaitre vos attentes, de découvrir votre histoire mais aussi de vous présenter mon travail. Ce moment offert ne vous engage en rien,alors n’hésitez pas à me contacter pour organiser notre rencontre !'
        },
        {
          title: '2. Jour -1',
          image: '',
          content: 'Il m’arrive de venir la veille pour découvrir les lieux, m’imprégner de l’ambiance et discuter avec vous des meilleurs spots où faire les photos de groupe et de couple. C’est aussi profiter du calme avant l’effervescence pour vous donner le meilleur de moi-même le jour J.'
        },
        {
          title: '3. Le jour J',
          content: 'Le grand jour est enfin arrivé. Le stress, l’impatience et l’émotion s’entremêlent dès le début de la journée, de quoi créer des instants que je ne manquerai pas de saisir. J’aime prendre le temps de photographier et mettre en scène les éléments qui font que cette journée est exceptionnelle comme la décoration, les alliances, les accessoires des mariés ou encore la papeterie.'
        },
        {
          title: '4. Le lendemain',
          content: 'La fête fût belle et c’est le moment de vous réunir pour un dernier instant de convivialité autour d’un repas ou d’un brunch. L’occasion idéale pour échanger vos impressions, relâcher, rire et raconter les meilleures anecdotes de cette journée passée. Un beau moment que j’aime partager avec vous tout en faisant quelques photos. Il est temps pour moi de rentrer en emportant tous ces jolis souvenirs que je vous restituerai une fois sublimés. Après quelques jours de tri, de traitements et de retouche, je vous donnerai accès à une belle galerie protégée par un mot de passe. Vous aurez la possibilité d’admirer toutes vos photos, de les télécharger en différents formats (HD, web), de donner l’accès à vos proches, de mettre en privé les photos que vous ne souhaitez pas partager mais aussi de faire des listes de photos favorites et prévoir des tirages.'
        },
        {
          title: '5. Le divorce',
          content: 'Célébrer votre divorce avec un album photo ! 😅😜'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

h1 {
  font-family: "Orpheus Pro", serif;
  font-weight: 400;
  font-size: 6.056rem;
  letter-spacing: initial;
  line-height: initial;

  margin: 20px 0 40px 0;
}

h2 {
  font-family: "Orpheus Pro", serif;
  font-weight: 700;
  font-size: 3.833rem;
  letter-spacing: initial;
  line-height: initial;

  margin: 60px 0 20px 0;
}

h3 {
  font-family: "Orpheus Pro", serif;
  font-weight: 700;
  font-size: 2.278rem;
  letter-spacing: initial;
  line-height: initial;
  text-align: center;
  position: relative;

  &:before {
    content: '';
    background: #d4a984;
    height: 3px;
    width: 16px;
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
  }
}

p {
  font-family: 'TT Commons', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.8125em;
  margin-top: initial;
  margin: 20px 0 40px 0;
  max-width: initial;
}

blockquote {
  font-family: 'Garamond Premier Pro Display';
  font-style: italic;
  font-size: 1.667rem;
  letter-spacing: 0.07em;
  text-align: center;
  margin: 0;

  &:before {
    content: '« '
  }

  &:after {
    content: ' »'
  }

  &~p:first-of-type {
    text-align: center;
    font-weight: 400;
    margin-top: 1em;
  }
}

.weddings-infos {
  color: #444;
  margin: auto;
  padding: 0 2.222rem;
  max-width: 1200px;
}

.weddings-infos__hero-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.weddings-infos__hero-introduction {
  flex: 1;
  min-width: 20rem;
  margin: 1rem;
}

.weddings-infos__hero-gallery {
  background: rgba(black, 0.1);
  flex: 0 1 400px;
  height: 400px;
  width: 400px;
}

.weddings-infos__flow {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 8rem;

  @media screen and (min-width: $large) {
    grid-template-columns: auto auto 1fr;
  }
}

.weddings-infos__flow-step-content {
  h3 {
    text-align: center;
  }

  @media screen and (min-width: $large) {
    h3 {
      text-align: left;
    }
  }
}

.weddings-infos__flow-step-illustration {
  background: rgba(black, 0.1);
  justify-self: center;
  height: 6rem;
  width: 6rem;
}

.weddings-infos__flow-step-dot {
  background: rgba(black, 0.1);
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: none;

  @media screen and (min-width: $large) {
    display: block;
  }
}

.weddings-infos__plans {
  margin-top: 8rem;
}
</style>
