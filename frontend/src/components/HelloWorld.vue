<script>
  export default {
    props: {
      msg: {
        required: true,
        type: String
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <img alt="" src="" />
  <p>{{ msg }}</p>
</template>
