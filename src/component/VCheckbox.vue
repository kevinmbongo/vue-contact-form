<template>
  <div class="flex items-center">
    <input
      :id="text"
      :checked="value"
      type="checkbox"
      :required="required"
      @change="handleChange"
    />

    <label class="ml-4" :for="text"> {{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'VCheckbox',

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
  },

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.checked)
    },
  },
}
</script>

<style scoped></style>
