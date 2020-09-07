<template>
  <PageLayout class="contact">
    <FormulateForm
      v-model="form"
      class="contact-form"
      @submit="send"
    >
      <TextTitle large>
        Écrivons-nous
      </TextTitle>
      <FormulateInput
        name="fullName"
        type="text"
        label="Votre prénom et nom"
        placeholder="Votre prénom et nom"
        validation="required"
        validation-name="Le prénom et nom"
      />
      <FormulateInput
        name="email"
        type="email"
        label="Votre email"
        placeholder="Votre email"
        validation="required"
        validation-name="L'email"
      />
      <FormulateInput
        name="phone"
        type="text"
        label="Votre téléphone"
        placeholder="Votre téléphone"
        :validation="[['bail'],['required'],['matches', /^(\+\d\d\s?\.?\d|\d\d)(\s?\.?\d\d){4}$/]]"
        :validation-messages="{ matches: 'Votre téléphone n\'est pas valide.' }"
        validation-name="Le numéro de téléphone"
      />
      <FormulateInput
        name="whereComesFrom"
        type="radio"
        :options="whereComesFromOptions"
        label="Comment m'avez-vous connue ?"
        placeholder="Sélectionner une option"
        validation="required"
        validation-name="Ce champ"
      />
      <FormulateInput
        name="messageSubjet"
        type="radio"
        :options="messageSubjetOptions"
        label="L'objet de votre message"
        validation="required"
        validation-name="L'objet du message"
      />
      <FormulateInput
        name="message"
        type="textarea"
        label="Décrivez-votre projet en quelques lignes"
        validation="bail|required|min:50|max:600"
        validation-name="Ce champ"
      />
      <FormulateInput type="submit" label="Envoyer" />
    </FormulateForm>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout'
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    PageLayout,
    TextTitle
  },

  data () {
    return {
      form: {}
    }
  },

  computed: {
    messageSubjetOptions () {
      return {
        wedding: 'Mariage',
        portrait: 'Portrait',
        professionnel: 'Professionel',
        other: 'Autre'
      }
    },

    whereComesFromOptions () {
      return {
        instagram: 'Instagram',
        pinterest: 'Pinterest',
        google: 'Google',
        wordOfMouth: 'Bouche à oreille',
        other: 'Autre'
      }
    }
  },

  methods: {
    async send (/* data */) {
      // console.log('☝️: send -> data', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  margin: auto;
  padding: 1.111rem;
  max-width: 33.333rem;
}
</style>
