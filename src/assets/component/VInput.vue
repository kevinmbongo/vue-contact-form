<template>
  <div>
    <input :type="type" :placeholder="placeholder" />
    <i v-if="hint" class="text-darkgray">{{ hint }}</i>
  </div>
</template>

<script>
export default {
  name: 'VInput',

  props: {
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
  },

  data: () => ({
    displayCondition: null,
  }),
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
  @apply not-italic;
}
</style>
