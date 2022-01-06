<template>
  <div class="grid gap-4">
    <div v-for="radio in radios" :key="radio.value" class="flex items-center">
      <input
        :id="radio.value"
        :checked="value"
        type="radio"
        :name="radioName"
        @change="handleChange"
      />
      <label class="ml-4" :for="radio.value"> {{ radio.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VRadio',

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
  },

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.checked)
    },
  },
}
</script>

<style scoped></style>
