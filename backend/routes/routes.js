const express = require('express')
const connection = require('../connection')
const router = express.Router()
const cors = require('cors')

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  Connection: 'keep-alive',
  methods: ['POST', 'GET', 'UPDATE', 'PUT', 'DELETE'],
}

router.get('/movie', async (req, res) => {
  let sql = `SELECT * FROM movie
  INNER JOIN movieGenre ON movie.movieId = movieGenre.movieGenreMId
  INNER JOIN genre ON movieGenre.movieGenreGId = genre.genreId
  LEFT JOIN saloon ON movie.movieSaloonId = saloon.saloonId
  LEFT JOIN rating ON movie.movieRatingId = rating.ratingId;`
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

router.get('/movie/:id', async (req, res) => {
  const { id } = req.params

  let sql = `
    SELECT * FROM movie
    INNER JOIN movieGenre ON movie.movieId = movieGenre.movieGenreMId
    INNER JOIN genre ON movieGenre.movieGenreGId = genre.genreId
    LEFT JOIN saloon ON movie.movieSaloonId = saloon.saloonId
    LEFT JOIN rating ON movie.movieRatingId = rating.ratingId
    WHERE movie.movieId = ?;
  `

  try {
    connection.query(sql, [id], (error, results, fields) => {
      if (error) throw error

      if (results.length === 0) {
        return res.status(404).json({
          error: 'Movie not found',
        })
      }

      res.status(200).json(results[0])
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.post('/adminReset', async (req, res) => {
  try {
    await connection.query('CALL ResetDb();')

    res.status(200).send('Databasen har återställts')
  } catch (error) {
    console.error(error)
    res.status(500).send('Något gick fel')
  }
})

router.get('/movie/:id', async (req, res) => {
  const { id } = req.params

  let sql = `
    SELECT * FROM movie
    INNER JOIN movieGenre ON movie.movieId = movieGenre.movieGenreMId
    INNER JOIN genre ON movieGenre.movieGenreGId = genre.genreId
    LEFT JOIN saloon ON movie.movieSaloonId = saloon.saloonId
    LEFT JOIN rating ON movie.movieRatingId = rating.ratingId
    WHERE movie.movieId = ?;
  `

  try {
    connection.query(sql, [id], (error, results, fields) => {
      if (error) throw error

      if (results.length === 0) {
        return res.status(404).json({
          error: 'Movie not found',
        })
      }

      res.status(200).json(results[0])
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.post('/admin', cors(corsOptions), async (req, res) => {
  let sql =
    'INSERT INTO movie (movieName, movieLengthMin, movieDescription, movieSaloonId, movieRatingId, movieImg) VALUES (?,?,?,?,?,?)'
  let params = [
    req.body.movieName,
    req.body.movieLengthMin,
    req.body.movieDescription,
    req.body.movieSaloonId,
    req.body.movieRatingId,
    req.body.movieImg,
  ]

  try {
    connection.query(sql, params, (error, results, fields) => {
      if (error) throw error

      res.json(results)
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  let postJunc =
    'INSERT INTO movieGenre (movieGenreMId, movieGenreGId) VALUES (?,?)'

  try {
    connection.query(
      postJunc,
      [req.body.movieGenreMId, req.body.movieGenreGId],
      (error, results, fields) => {
        if (error) throw error

        /*res.json(results);*/
        // res.json(results)
      }
    )
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
})

router.put('/admin', cors(corsOptions), async (req, res) => {
  let sql = `UPDATE movie SET movieRatingId=?
    WHERE movieId=?`
  console.log(req.body)
  const { movieRatingId, movieId } = req.body

  try {
    connection.query(
      sql,
      [movieRatingId, movieId],
      function (error, results, fields) {
        if (error) throw error

        return res.status(201).json({
          success: true,
          error: '',
        })
      }
    )
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})
// router.delete('/admin', cors(corsOptions), async (req, res) => {
//   console.log(req.body)
//   let deleteJunc = 'DELETE FROM movieGenre WHERE movieGenreMId = ?'
//   console.log('movieId' + req.body.movieId)
// })
router.delete('/admin', cors(corsOptions), async (req, res) => {
  console.log(req.body)
  let deleteJunc = 'DELETE FROM movieGenre WHERE movieGenreMId = ?'

  try {
    connection.query(
      deleteJunc,
      [req.body.movieId],
      (error, results, fields) => {
        if (error) throw error

        // return res.status(201).json({
        //   success: true,
        //   error: "",
        //   message: "Filmgenren är nu raderad!",
        // });
      }
    )
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }

  let sql = 'DELETE FROM movie WHERE movieId = ?'
  try {
    connection.query(sql, [req.body.movieId], (error, results, fields) => {
      if (error) throw error

      return res.status(201).json({
        success: true,
        error: '',
        message: 'Filmen är nu raderad!',
      })
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
