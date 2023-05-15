<script>
  export default {
    methods: {
      async resetDb() {
        try {
          const response = await fetch('http://localhost:3000/adminReset', {
            method: 'POST'
          })
          if (response.ok) {
            alert('Database reset')
            location.reload()
          } else {
            throw new Error('Something went wrong')
          }
        } catch (error) {
          console.error(error)
          alert('Something went wrong')
        }
      }
    }
  }
</script>

<template>
  <div id="reset">
    <input
      class="btn-btn-primary"
      @click="resetDb()"
      type="button"
      value="Reset Database"
    />
  </div>
</template>
<style scoped>
  .btn-btn-primary {
    padding: 5px 10px 5px 10px;
    font-size: 20px;
    line-height: 30px;
    border: none;
    border-radius: 40px;
    background-color: #414a4c;
    color: #dddada;
    margin-left: 30%;

  }
  #reset {
    background-color: #414a4c;
    height: 50px;
  }
</style>
