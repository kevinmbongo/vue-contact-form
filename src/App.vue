<template>
  <div id="app" class="h-screen flex items-center justify-center">
    <validation-observer ref="formValidation" v-slot="{ valid }">
      <article class="grid grid-cols-2 gap-8 mx-auto container px-20">
        <header class="col-span-2 flex justify-center">
          <h3>Veuillez renseignez vos coordonnées</h3>
        </header>

        <section>
          <div class="grid gap-4">
            <v-toggle
              v-model="customerType"
              label="Vous êtes"
              :options="[
                { label: 'Professionnel', value: 'pro' },
                { label: 'Particulier', value: 'particular' },
              ]"
            />
            <v-toggle
              v-model="gender"
              label="Civilité"
              :options="[
                { label: 'Mme', value: 'mme' },
                { label: 'M.', value: 'm' },
              ]"
            />

            <v-select
              v-model="salePoint"
              :sale-points="[
                {
                  label: 'SAS AUTO',
                  value: '1782A',
                },
                {
                  label: 'CAP AUTOMOBILES ',
                  value: '1782B',
                },
              ]"
              required
            />
            <v-input
              v-model="firstName"
              placeholder="Nom *"
              type="text"
              required
            />
            <v-input
              v-model="lastName"
              placeholder="Prénom *"
              type="text"
              required
            />
          </div>
        </section>

        <section>
          <div class="grid gap-4">
            <v-input
              v-model="phone"
              placeholder="Téléphone *"
              type="tel"
              hint="Pour couvenir d'un rendez-vous"
              required
            />

            <v-input
              v-model="email"
              placeholder="Adresse email *"
              type="email"
              required
            />
            <v-textarea v-model="message" required />
          </div>
        </section>

        <section class="col-span-2">
          <div class="grid gap-4">
            <v-checkbox
              v-model="emailingAd"
              text="J'accepte de recevoir l'actualité et les offres Suzuki par courrier électronique. À chaque email j'aurais la possibilité de mettre fin à toute communication."
            />
            <v-checkbox
              v-model="smsAd"
              text="Je souhaite recevoir des informations de la part de Suzuki par SMS."
            />
            <v-checkbox
              v-model="policyProctection"
              text="J'ai pris connaissance de la politique de protection des données personnelles de Suzuki France. *"
              required
            />
          </div>
        </section>

        <section class="col-span-2 mt-5">
          <div class="grid gap-4">
            <v-radio
              v-model="radioEmailing"
              :radios="[
                {
                  label:
                    'Je souhaite recevoir des informations de la part de Suzuki par SMS.',
                  value: '1749C',
                },
                {
                  label:
                    'Je souhaite recevoir des informations de la part de Suzuki par SMS.',
                  value: '1749D',
                },
                {
                  label:
                    'Je souhaite recevoir des informations de la part de Suzuki par SMS.',
                  value: '1749E',
                },
              ]"
              radio-name="Radio Emailing"
              :required="true"
            />
          </div>
        </section>

        <footer class="col-span-2 flex justify-center">
          <v-button
            text-button="Envoyer ma demande"
            :disabled="!valid"
            @click="handleSubmit"
          />
        </footer>
      </article>
    </validation-observer>
  </div>
</template>

<script>
import VToggle from '@/component/VToggle'
import VInput from '@/component/VInput'
import VSelect from '@/component/VSelect'
import VTextarea from '@/component/VTextarea'
import VCheckbox from '@/component/VCheckbox'
import VButton from '@/component/VButton'
import VRadio from '@/component/VRadio'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'App',

  components: {
    VRadio,
    VButton,
    VCheckbox,
    VTextarea,
    VSelect,
    VInput,
    VToggle,
    ValidationObserver,
  },

  data: () => ({
    customerType: 'pro',
    gender: 'mme',
    salePoint: '1782A',
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    message: '',
    emailingAd: false,
    smsAd: false,
    policyProctection: false,
    radioEmailing: true,
    radioSms: false,
    radioPolicy: false,
  }),

  methods: {
    handleSubmit() {
      const formState = {
        customerType: this.customerType,
        gender: this.gender,
        salePoint: this.salePoint,
        lastName: this.lastName,
        firstName: this.firstName,
        phone: this.phone,
        email: this.email,
        message: this.message,
        emailingAd: this.emailingAd,
        smsAd: this.smsAd,
        policyProctection: this.policyProctection,
      }

      alert(JSON.stringify(formState))
    },
  },
}
</script>

<style scoped>
input,
textarea,
button {
  @apply border border-blue;
}
i {
  @apply text-sm;
}
</style>
