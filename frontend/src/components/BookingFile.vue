<template>
  <div id="datePickerBox">
    <Datepicker
      id="datePicker"
      v-model="date"
      input-class="customClass"
      :inline="true"
      @selected="parentfunctionSelectedhandler"
      :disabled-dates="disabledDates"
    />

    <!-- {{ disabledDates.dates }} -->
    <button type="button" class="btn-btn-primary" @click="postDate">
      Boka datum
    </button>
  </div>
  <RouterView />
</template>
<script>
  // import { json } from 'stream/consumers'
  import Datepicker from 'vuejs3-datepicker'
  export default {
    created() {
      this.getDate()
    },
    components: { Datepicker },
    methods: {
      async postDate() {
        const response = await fetch('http://localhost:3000/bookings', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({
            date: this.date,
            saloon: this.saloon,
            movie: this.movie
          })
        })
        console.log(response)
        this.getDate()
        this.$router.push('/confirmation')
      },
      async getDate() {
        const response = await fetch('http://localhost:3000/bookings')
        const result = await response.json()
        this.data = result
        console.log(result)
        this.datesDisabled()
      },
      datesDisabled() {
        // push the dates from the database into the disabledDates array
        this.data.forEach((item, i) => {
          this.disabledDates.dates.push(new Date(this.data[i].date))
        })
      }
    },
    data() {
      return {
        date: new Date(),
        disabledDates: {
          to: new Date(2016, 0, 5), // Disable all dates up to specific date

          dates: [
            // Disable an array of dates
          ],
          preventDisableDateSelection: true
        },
        data: null,
        bookedDate: []
      }
    },
    props: {
      saloon: {
        default: 'saloon',
        type: String
      },
      movie: {
        default: 'movie',
        type: String
      }
    }
  }
</script>

<style scoped>
  #datePickerBox {
    /* width: 80%; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .btn-btn-primary {
    width: 70%;
    margin: 5%;
    background-color: #414a4c;
    color: #dddada;
    border-radius: 10px;
  }
</style>
