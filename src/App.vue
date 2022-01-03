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
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </section>

      <section>
        <div class="grid gap-4">
          <input type="text" />
          <input type="text" />
          <textarea class="border-blue-900"></textarea>
        </div>
      </section>

      <section class="col-span-2">
        <div class="grid gap-4">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </section>

      <footer class="col-span-2 flex justify-center">
        <button>Envoyer ma demande</button>
      </footer>
    </article>
  </div>
</template>

<script>
import VToggle from '@/assets/component/VToggle'

export default {
  name: 'App',
  components: { VToggle },
}
</script>

<style scoped>
input,
textarea,
button {
  @apply border border-blue;
}
</style>
