<template>
  <textarea
    rows="6"
    :value="value"
    placeholder="Message *"
    :required="required"
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

    required: {
      type: Boolean,
      default: false,
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
  @apply border border-blue rounded w-full px-3 py-1;
}
::placeholder {
  @apply text-blue text-base;
}
</style>
