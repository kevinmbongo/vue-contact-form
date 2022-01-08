<template>
  <validation-provider v-slot="{ errors }" ref="provider" :rules="rules" slim>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      @input="handleInput"
    />

    <i v-if="hint" class="text-darkgray">{{ hint }}</i>
    <i v-if="errors.length" class="text-red">{{ errors[0] }}</i>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'VInput',

  components: {
    ValidationProvider,
  },

  props: {
    rules: {
      type: String,
      required: true,
    },

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

    required: {
      type: Boolean,
      default: false,
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
  @apply not-italic block text-sm;
}
</style>
