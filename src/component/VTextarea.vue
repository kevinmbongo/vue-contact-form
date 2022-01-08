<template>
  <validation-provider v-slot="{ errors }" ref="provider" :rules="rules" slim>
    <textarea
      rows="6"
      :value="value"
      placeholder="Message *"
      :required="required"
      @input="handleInput"
    ></textarea>
    <i v-if="errors.length" class="text-red">{{ errors[0] }}</i>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'VTextarea',

  components: {
    ValidationProvider,
  },

  props: {
    value: {
      type: String,
      required: true,
    },

    required: {
      type: Boolean,
      default: false,
    },

    rules: {
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
  @apply border border-blue rounded w-full px-3 py-1;
}
::placeholder {
  @apply text-blue text-base;
}
</style>
