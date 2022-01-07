<template>
  <validation-provider
    v-slot="{ errors }"
    ref="provider"
    :rules="rules"
    slim
    class="flex items-center"
  >
    <input
      :id="text"
      :checked="value"
      type="checkbox"
      :required="required"
      @change="handleChange"
    />

    <label class="ml-4" :for="text"> {{ text }}</label>
    <i v-if="errors.length" class="text-red">{{ errors[0] }}</i>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'VCheckbox',

  components: {
    ValidationProvider,
  },

  props: {
    text: {
      type: String,
      required: true,
    },

    value: {
      type: Boolean,
      required: true,
    },

    required: {
      type: Boolean,
      default: false,
    },

    rules: {
      type: String,
      default: null,
    },
  },

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.checked)
    },
  },
}
</script>

<style scoped></style>
