<script>
  import AddMovie from '../components/AddMovie.vue'
  import ResetDb from '../components/ResetDb.vue'
  import UpdateMovie from '../components/UpdateMovie.vue'

  export default {
    components: {
      ResetDb,
      UpdateMovie,
      AddMovie
    }
  }
</script>

<template>
  <main>
    <UpdateMovie />
    <AddMovie />
  </main>
  <footer>
    <ResetDb />
  </footer>
</template>
