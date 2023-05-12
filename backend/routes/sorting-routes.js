const express = require('express')
const connection = require('../connection')
const router = express.Router()
const cors = require('cors')

router.get('/movies/sortByName', async (req, res) => {
  let sql = `SELECT * FROM movie
             INNER JOIN rating ON movie.movieRatingId = rating.ratingId ORDER BY movieName`
  try {
    connection.query(sql, (error, results, fields) => {
      if (error) throw error

      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.get('/movies/sortByRating', async (req, res) => {
  let sql = `SELECT * FROM movie
             INNER JOIN rating ON movie.movieRatingId = rating.ratingId
             ORDER BY rating.ratingNumber DESC`
  try {
    connection.query(sql, (error, results, fields) => {
      if (error) throw error

      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

module.exports = router
