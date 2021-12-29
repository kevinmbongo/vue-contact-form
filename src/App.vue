<template>
  <div id="app" class="mx-auto container my-10">
    <header class="flex justify-center">
      <h3 class="text-blue-900 text-2xl font-bold">
        Veuillez renseignez vos coordonnées
      </h3>
    </header>
    <section class="grid grid-cols-2 my-5">
      <div>
        <article class="mx-5 grid grid-rows-5 gap-4">
          <div class="flex items-center justify-between">
            <p>Vous êtes</p>
            <div>
              <button class="selectedButton border-r-0">Particulier</button>
              <button class="UnselectedButton">Professionnel</button>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p>Civilité</p>
            <div>
              <button class="selectedButton border-l-0">M.</button>
              <button class="UnselectedButton">Mme</button>
            </div>
          </div>
          <span>
            <input
              type="text"
              placeholder="CAP AUTOMOBILES 21 RUE D'AVIGNON 17140 LAGORD"
              class="border-2"
            />
          </span>
          <span>
            <input type="text" placeholder="Nom*" class="border-2" />
          </span>
          <span>
            <input type="text" placeholder="Prénom*" class="border-2" />
          </span>
        </article>
      </div>
      <article class="mx-5">
        <div>
          <span>
            <input type="text" placeholder="Téléphone*" class="border-2" />
          </span>
          <span>
            <input type="text" placeholder="Adresse email*" class="border-2" />
          </span>
          <textarea
            id="message"
            name="story"
            rows="5"
            cols="33"
            class="border-2"
            placeholder="Message*"
          >
          </textarea>
        </div>
      </article>
    </section>
    <section class="my-5">
      <div>
        <input id="condition1" type="checkbox" />
        <label for="condition1">
          J'accepte de recevoir l'actualité et les offres Suzuki par courrier
          électronique. À chaque email j'aurais la possibilité de mettre fin à
          toute communication.</label
        >
      </div>
      <div>
        <input id="condition2" type="checkbox" />
        <label for="condition2">
          Je souhaite recevoir des informations de la part de Suzuki par
          SMS.</label
        >
      </div>
      <div>
        <input id="condition3" type="checkbox" />
        <label for="condition3">
          J'ai pris connaissance de la politique de protection des données
          personnelles de Suzuki France. *</label
        >
      </div>
      <i>* Champs obligatoires</i>
    </section>
    <footer class="flex justify-center my-5">
      <button class="falseButton">Envoyer ma demande</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.selectedButton {
  @apply bg-blue-900 text-white border-2 rounded p-2 border-r-0 w-32;
}
.UnselectedButton {
  @apply bg-white text-blue-900 border-2 rounded p-2 border-r-0 w-32;
}
.falseButton {
  @apply bg-gray-300 text-white border-r-2 border-2 rounded p-2;
}
.trueButton {
  @apply bg-blue-900 text-white border-r-2 border-2 rounded p-2;
}
</style>
