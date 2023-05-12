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
    {{
      date.toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })
    }}
    {{ saloon }}
    <!-- {{ disabledDates.dates }} -->
    <button type="button" class="btn btn-outline-success" @click="postDate">
      Boka datum
    </button>
  </div>
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
          body: JSON.stringify({ date: this.date, saloon: this.saloon })
        })
        console.log(response)
        this.getDate()
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
      }
    }
  }
</script>

<style>
  #datePickerBox {
    width: 80%;
    margin-left: 9%;
  }
  .btn {
    width: 90%;
    margin: 10% 0 10% 5%;

  }
</style>
