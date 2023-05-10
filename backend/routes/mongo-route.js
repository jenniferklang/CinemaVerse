const express = require('express')
const connection = require('../connection')
const router = express.Router()
const cors = require('cors')
const BookingSchema = require('../models')

router.post('/bookings', async (req, res) => {
  let saloon = req.body.saloon
  let chairs = req.body.chairs
  let date = req.body.date

  try {
    const newBooking = new BookingSchema({
      saloon,
      chairs,
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

module.exports = router
