<template>
  <validation-provider
    v-slot="{ errors }"
    ref="provider"
    :rules="rules"
    slim
    class="grid gap-4"
  >
    <div v-for="radio in radios" :key="radio.value" class="flex items-center">
      <input
        :id="radio.value"
        :checked="value"
        type="radio"
        :name="radioName"
        :required="required"
        @change="handleChange"
      />
      <label class="ml-4" :for="radio.value"> {{ radio.label }}</label>
      <i v-if="errors.length" class="text-red">{{ errors[0] }}</i>
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'VRadio',

  components: {
    ValidationProvider,
  },

  props: {
    radioName: {
      type: String,
      required: true,
    },

    value: {
      type: Boolean,
      required: true,
    },

    radios: {
      type: Array,
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
