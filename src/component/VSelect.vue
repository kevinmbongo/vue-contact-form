<template>
  <select :value="value" @input="handleChange">
    <option
      v-for="salePoint in salePoints"
      :key="salePoint.value"
      :value="salePoint.value"
      :required="required"
    >
      {{ salePoint.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'VSelect',

  props: {
    salePoints: {
      type: Array,
      required: true,
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

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style scoped>
select {
  @apply border border-blue rounded w-full h-10 px-3;
}
option {
  @apply text-base;
}
</style>
