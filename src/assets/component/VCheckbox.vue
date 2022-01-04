<template>
  <div class="flex items-center">
    <input :id="text" type="checkbox" />

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
  },
}
</script>

<style scoped></style>
