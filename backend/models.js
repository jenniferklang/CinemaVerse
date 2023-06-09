const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  saloon: {
    type: String,
    // required: true,
  },
  movie: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('booking', BookingSchema)
