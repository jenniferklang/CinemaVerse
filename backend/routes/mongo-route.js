const express = require('express')
const connection = require('../connection')
const router = express.Router()
const cors = require('cors')
const BookingSchema = require('../models')

router.post('/bookings', async (req, res) => {
  let saloon = req.body.saloon
  let movie = req.body.movie
  let date = req.body.date

  try {
    const newBooking = new BookingSchema({
      saloon,
      movie,
      date,
    })
    const insertedBooking = await newBooking.save()
    return res.status(201).json(insertedBooking)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.get('/bookings', async (req, res) => {
  try {
    const allBookings = await BookingSchema.find()
    return res.status(200).json(allBookings)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.get('/latest', async (req, res) => {
  try {
    const latestBooking = await BookingSchema.find().sort({ _id: -1 }).limit(1)
    return res.status(200).json(latestBooking)
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.delete('/cancel', async (req, res) => {
  const { id } = req.body
  try {
    await BookingSchema.deleteOne({ _id: id })
    return res.status(204).json('Booking deleted')
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

module.exports = router
