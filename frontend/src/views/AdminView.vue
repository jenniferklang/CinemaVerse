
<script>
  import ResetDb from '../components/ResetDb.vue'
  import UpdateMovie from '../components/UpdateMovie.vue';


  export default {
    components: {
    ResetDb,
    UpdateMovie
}
  }
</script>


<template><h1>Admin</h1>
<ResetDb />
<UpdateMovie />
</template>
