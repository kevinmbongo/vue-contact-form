<template>
  <div id="app" class="h-screen flex items-center justify-center">
    <article class="grid grid-cols-2 gap-8 mx-auto container px-20">
      <header class="col-span-2 flex justify-center">
        <h3>Veuillez renseignez vos coordonnées</h3>
      </header>

      <section>
        <div class="grid gap-4">
          <v-toggle
            label="Vous êtes"
            :options="[
              { label: 'Professionnel', value: 'pro' },
              { label: 'Particulier', value: 'particular' },
            ]"
          />
          <v-toggle
            label="Civilité"
            :options="[
              { label: 'Mme', value: 'mme' },
              { label: 'M.', value: 'm' },
            ]"
          />
          <v-select />
          <v-input placeholder="Nom *" type="text" />
          <v-input placeholder="Prénom *" type="text" />
        </div>
      </section>

      <section>
        <div class="grid gap-4">
          <v-input
            placeholder="Téléphone *"
            type="tel"
            hint="Pour couvenir d'un rendez-vous"
          />
          <v-input placeholder="Adresse email *" type="email" />
          <v-textarea />
        </div>
      </section>

      <section class="col-span-2">
        <div class="grid gap-4">
          <v-checkbox
            text="J'accepte de recevoir l'actualité et les offres Suzuki par courrier électronique. À chaque email j'aurais la possibilité de mettre fin à toute communication."
          />
          <v-checkbox
            text="Je souhaite recevoir des informations de la part de Suzuki par SMS."
          />
          <v-checkbox
            text="J'ai pris connaissance de la politique de protection des données personnelles de Suzuki France. *"
          />
          <i>* Champs obligatoires</i>
        </div>
      </section>

      <footer class="col-span-2 flex justify-center">
        <v-button text-button="Envoyer ma demande" />
      </footer>
    </article>
  </div>
</template>

<script>
import VToggle from '@/assets/component/VToggle'
import VInput from '@/assets/component/VInput'
import VSelect from '@/assets/component/VSelect'
import VTextarea from '@/assets/component/VTextarea'
import VCheckbox from '@/assets/component/VCheckbox'
import VButton from '@/assets/component/VButton'

export default {
  name: 'App',
  components: { VButton, VCheckbox, VTextarea, VSelect, VInput, VToggle },
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
