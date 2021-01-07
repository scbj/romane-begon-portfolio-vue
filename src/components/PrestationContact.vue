<template>
  <div class="prestation-contact" :style="customProperties">
    <TextTitle class="prestation-contact__title" large>
      Contactez-moi
    </TextTitle>
    <TextTitle class="prestation-contact__subtitle" small>
      Les réservations sont ouvertes !
    </TextTitle>
    <FormulateForm
      v-model="form"
      class="prestation-contact__form"
      :schema="formSchemaByStep"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    TextTitle
  },

  data () {
    return {
      form: {},
      step: 1
    }
  },

  computed: {
    customProperties () {
      const url = 'https://ucarecdn.com/a62b96eb-46ab-49cd-9e26-5ba5b80a3562/-/format/webp/-/quality/normal/'
      return {
        '--background-image': `url(${url})`
      }
    },

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
    },

    formSchema () {
      return [
        {
          label: 'Votre email',
          type: 'email',
          name: 'email',
          placeholder: 'Votre email',
          validation: 'required',
          validationName: "L'email"
        },
        {
          label: 'Votre prénom et nom',
          type: 'text',
          name: 'fullName',
          placeholder: 'Votre prénom et nom',
          validation: 'required',
          validationName: 'Le prénom et nom'
        },
        {
          label: 'Votre téléphone',
          type: 'tel',
          name: 'phone',
          placeholder: 'Votre téléphone',
          validation: [['bail'], ['required'], ['matches', /^(\+\d\d\s?\.?\d|\d\d)(\s?\.?\d\d){4}$/]],
          validationMessages: { matches: "Votre téléphone n'est pas valide." },
          validationName: 'Le numéro de téléphone'
        },
        {
          label: "Comment m'avez-vous connue ?",
          type: 'radio',
          name: 'whereComesFrom',
          placeholder: 'Sélectionner une option',
          options: {
            instagram: 'Instagram',
            pinterest: 'Pinterest',
            google: 'Google',
            wordOfMouth: 'Bouche à oreille',
            other: 'Autre'
          },
          validation: 'required',
          validationName: 'Ce champ'
        },
        {
          label: "L'objet de votre message",
          type: 'radio',
          name: 'messageSubjet',
          placeholder: 'Sélectionner une option',
          options: {
            wedding: 'Mariage',
            portrait: 'Portrait',
            professionnel: 'Professionel',
            other: 'Autre'
          },
          validation: 'required',
          validationName: "L'objet du message"
        },
        {
          label: 'Message',
          type: 'textarea',
          name: 'message',
          placeholder: 'Décrivez-votre projet en quelques lignes',
          validation: 'bail|required|min:50|max:700',
          validationName: 'Ce champ'
        }
      ]
    },

    formSchemaByStep () {
      const buttonLabel = this.step < 6 ? 'Suivant' : 'Envoyer'
      const activeStep = this.formSchema[this.step - 1]
      return [
        activeStep,
        {
          type: 'submit',
          label: buttonLabel
        }
      ]
    }
  },

  methods: {
    onSubmit (payload) {
      const lastStep = 6
      if (this.step === lastStep) {
        return
      }

      this.step += 1
      console.log('☝️ ~ file: PrestationContact.vue ~ line 68 ~ onSubmit ~ payload', payload)
      console.log('uo')
    }
  }
}
</script>

<style lang="scss" scoped>
.prestation-contact {
  background: linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 80%), bottom / 100% no-repeat var(--background-image);
  height: 1000px;
}

.prestation-contact__title,
.prestation-contact__subtitle {
  text-align: center;
}

.prestation-contact__form {
  max-width: 30rem;
  padding-top: 2rem;
  margin: auto;
}
</style>
