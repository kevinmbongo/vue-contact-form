<template>
  <button @click="$emit('click')">
    {{ textButton }}
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    textButton: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
button {
  @apply border-none outline-none bg-red px-5 py-3 rounded text-white text-base font-bold;
}

button:hover {
  @apply bg-darkred transition-all ease-in-out duration-300;
}

button:focus {
  @apply outline-none;
}
</style>
