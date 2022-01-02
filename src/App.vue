<template>
  <div id="app" class="mx-auto container my-20">
    <header class="flex justify-center">
      <h3 class="text-blue-900 text-2xl font-bold mb-10">
        Veuillez renseignez vos coordonnées
      </h3>
    </header>
    <section class="grid grid-cols-2 gap-x-3 my-5 mx-auto max-w-screen-lg">
      <div>
        <article class="grid grid-rows-5 gap-5">
          <div class="flex items-center">
            <p>Vous êtes</p>
            <div class="w-20"></div>
            <div>
              <button class="selectedButton border-r-0">Particulier</button>
              <button class="UnselectedButton">Professionnel</button>
            </div>
          </div>
          <div class="flex items-center">
            <p>Civilité</p>
            <div class="w-24 ml-2"></div>
            <div>
              <button class="selectedButton border-l-0">M.</button>
              <button class="UnselectedButton">Mme</button>
            </div>
          </div>

          <span>
            <input
              type="text"
              placeholder="CAP AUTOMOBILES 21 RUE D'AVIGNON 17140 LAGORD"
              class="inputTextStyle"
            />
          </span>
          <span>
            <input type="text" placeholder="Nom*" class="inputTextStyle" />
          </span>
          <span>
            <input type="text" placeholder="Prénom*" class="inputTextStyle" />
          </span>
        </article>
      </div>
      <div>
        <article class="grid grid-cols-1 gap-5">
          <span class="flex flex-col">
            <input
              type="text"
              placeholder="Téléphone*"
              class="inputTextStyle"
            />
            <i>Pour convenir d'un rendez-vous</i>
          </span>
          <span>
            <input
              type="text"
              placeholder="Adresse email*"
              class="inputTextStyle"
            />
          </span>

          <div>
            <textarea
              id="message"
              name="story"
              rows="5"
              cols="33"
              class="border-2 border-blue-900 text-blue-900 w-10/12 h-44 rounded"
              placeholder="Message*"
            >
            </textarea>
          </div>
        </article>
      </div>
    </section>
    <section class="my-5">
      <div class="mt-5">
        <input id="condition1" type="checkbox" />
        <label for="condition1">
          J'accepte de recevoir l'actualité et les offres Suzuki par courrier
          électronique. À chaque email j'aurais la possibilité de mettre fin à
          toute communication.</label
        >
      </div>
      <div class="mt-5">
        <input id="condition2" type="checkbox" />
        <label for="condition2">
          Je souhaite recevoir des informations de la part de Suzuki par
          SMS.</label
        >
      </div>
      <div class="mt-5">
        <input id="condition3" type="checkbox" />
        <label for="condition3">
          J'ai pris connaissance de la politique de protection des données
          personnelles de Suzuki France. *</label
        >
      </div>
      <div class="mt-5">
        <i>* Champs obligatoires</i>
      </div>
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
  @apply bg-blue-900 text-white border-2 rounded py-2 px-5 border-r-0 w-36 text-xl;
}
.UnselectedButton {
  @apply bg-white text-blue-900 border-2 rounded py-2 px-6 border-r-0 w-36 text-xl;
}
.falseButton {
  @apply bg-gray-200 text-white  border-2 rounded mt-5 py-3 px-8 text-base font-bold;
}
.trueButton {
  @apply bg-blue-900 text-white  border-2 rounded mt-5 py-3 px-8 text-base font-bold;
}
.inputTextStyle {
  @apply border-2 border-blue-900 rounded md:w-10/12 h-12;
}
i {
  @apply text-sm;
}
</style>
