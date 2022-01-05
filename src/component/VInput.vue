<template>
  <div>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <i v-if="hint" class="text-darkgray">{{ hint }}</i>
  </div>
</template>

<script>
export default {
  name: 'VInput',

  props: {
    placeholder: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    hint: {
      type: String,
      default: null,
    },

    value: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    displayCondition: null,
  }),

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped>
input {
  @apply border border-blue rounded w-full h-10 px-3;
}
::placeholder {
  @apply text-blue text-base;
}
i {
  @apply not-italic;
}
</style>
