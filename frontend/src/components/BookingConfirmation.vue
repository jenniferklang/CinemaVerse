<script>
  export default {
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.latest()
        },
        { immediate: true }
      )
    },
    data() {
      return {
        latestDocument: null
      }
    },
    methods: {
      async latest() {
        try {
          const response = await fetch(`http://localhost:3000/latest`)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          this.latestDocument = await response.json()
        } catch (error) {
          console.error('Error fetching movie data:', error)
        }
        console.log(this.latestDocument)
      }
    }
  }
</script>

<template>
  <p>Ditt boknings id är {{ latestDocument[0]._id }}.</p>
  <div>
    Du har bokat
    {{ latestDocument[0].movie }} den
    {{ latestDocument[0].date.split('T')[0] }} som spelas i
    {{ latestDocument[0].saloon }}.
  </div>
</template>

<style scoped>
  * {
    font-size: 16px;
  }
</style>
