<script>
  import { useToast } from 'vue-toastification'
  export default {
    setup() {
      // Get toast interface
      const toast = useToast()

      // Use it!
      // These options will override the options defined in the "app.use" plugin registration for this specific toast

      // Make it available inside methods
      return { toast }
    },
    data() {
      return {
        cancelBooking: null
      }
    },
    methods: {
      async cancel() {
        const response = await fetch('http://localhost:3000/cancel', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.cancelBooking
          })
        })
        console.log(response)
        response.ok
          ? this.toast.success('Du har nu avbokat')
          : this.toast.error('Nått gick fel!')
      }
    }
  }
</script>

<template>
  <p>Skriv in ditt bokningsid</p>
  <input v-model="cancelBooking" />
  <button @click="cancel">Avboka</button>
</template>
