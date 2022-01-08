<template>
  <validation-provider v-slot="{ errors }" ref="provider" :rules="rules" slim>
    <div class="flex items-center">
      <input :id="text" :value="value" type="checkbox" @change="handleChange" />

      <label class="ml-4" :for="text"> {{ text }}</label>
    </div>
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
      default: false,
    },

    required: {
      type: Boolean,
      default: false,
    },

    rules: {
      type: [String, Object],
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

<style scoped>
i {
  @apply not-italic block text-sm;
}
</style>
