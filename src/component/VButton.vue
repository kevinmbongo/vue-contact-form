<template>
  <div>
    <button>
      {{ textButton }}
    </button>
  </div>
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
  @apply bg-red px-5 py-2 rounded text-white text-base font-bold;
}
button:hover {
  @apply bg-darkred transition-all ease-in-out duration-300;
}
</style>
