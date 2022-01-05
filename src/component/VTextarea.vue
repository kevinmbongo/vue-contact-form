<template>
  <textarea
    rows="7"
    :value="value"
    placeholder="Message *"
    @input="handleInput"
  ></textarea>
</template>

<script>
export default {
  name: 'VTextarea',

  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped>
textarea {
  @apply border border-blue rounded w-full px-3;
}
::placeholder {
  @apply text-blue text-base;
}
</style>
