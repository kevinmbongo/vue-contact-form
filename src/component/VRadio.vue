<template>
  <div class="flex items-center">
    <input :id="text" :checked="value" type="radio" @change="handleChange" />
    <label class="ml-4" :for="text"> {{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'VRadio',

  props: {
    text: {
      type: String,
      required: true,
    },
  },

  value: {
    type: Boolean,
    required: true,
  },

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.checked)
    },
  },
}
</script>

<style scoped></style>
