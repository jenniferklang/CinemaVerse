<template>
  <Datepicker
    v-model="date"
    :disabled-dates="disabledDates"
    input-class="customClass"
    :inline="true"
    @selected="parentfunctionSelectedhandler"
  />
  {{
    date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
  }}
  <button @click="postDate">Boka datum</button>
</template>
<script>
  import Datepicker from 'vuejs3-datepicker'
  export default {
    components: { Datepicker },
    methods: {
      async postDate() {
        const response = await fetch('http://localhost:3000/bookings', {
          method: 'post',
          body: JSON.stringify({ date: this.date })
        })
        console.log(response)
      }
    },
    data() {
      return { date: new Date() }
    }
  }
</script>
