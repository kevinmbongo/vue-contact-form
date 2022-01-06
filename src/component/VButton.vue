<template>
  <button
    :class="{
      'cursor-not-allowed bg-lightgray hover:bg-darkgray': disabled,
      'bg-red  hover:bg-darkred ': !disabled,
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
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

    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
button {
  @apply border-none outline-none px-5 py-3 rounded text-white text-base font-bold transition-all ease-in-out duration-300;
}

button:focus {
  @apply outline-none;
}
</style>
