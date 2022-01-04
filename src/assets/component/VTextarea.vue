<template>
  <textarea rows="7" placeholder="Message *"></textarea>
</template>

<script>
export default {
  name: 'VTextarea',
}
</script>

<style scoped>
textarea {
  @apply border border-blue rounded w-full px-3;
}
::placeholder {
  @apply text-blue text-base;
}
</style>
