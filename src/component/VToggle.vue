<template>
  <div class="flex justify-between items-center">
    <label>{{ label }}</label>

    <div>
      <button
        v-for="(option, index) in options"
        :key="option.value"
        :class="{
          active: value === option.value,
          'rounded-l border-l': index === 0,
          'rounded-r': index === options.length - 1,
        }"
        @click="toggle(option.value)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VToggle',

  props: {
    label: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },
  },

  methods: {
    toggle(optionId) {
      this.$emit('input', optionId)
    },
  },
}
</script>

<style scoped>
button {
  @apply border-r border-t border-b border-blue transition-all ease-in-out duration-300 px-7 py-2 text-lg;
}
.active {
  @apply bg-blue text-white;
}
</style>
