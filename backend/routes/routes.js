const express = require("express");
const connection = require("../connection");
const router = express.Router();

router.get("/movie", async (req, res) => {
  let sql = `SELECT * FROM movie
  INNER JOIN movieGenre ON movie.movieId = movieGenre.movieGenreMId
  INNER JOIN genre ON movieGenre.movieGenreGId = genre.genreId
  INNER JOIN saloon ON movie.movieSaloonId = saloon.saloonId
  INNER JOIN rating ON movie.movieRatingId = rating.ratingId;`;
  try {
    await connection.query(sql, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/admin", async (req, res) => {
  let sql =
    "INSERT INTO movie (movieName, movieLengthMin, movieDescription, movieSaloonId, movieRatingId, movieImg) VALUES (?,?,?,?,?,?)";
  let params = [
    req.body.movieName,
    req.body.movieLengthMin,
    req.body.movieDescription,
    req.body.movieSaloonId,
    req.body.movieRatingId,
    req.body.movieImg,
  ];
  console.log(req.body);
  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});
router.post("/api/books", async (req, res) => {
  let sql =
    "INSERT INTO bok (bokTitel, bokForfattare, bokIsbn, bokPris, bokKategoriId) VALUES (?,?,?,?,?)";
  let params = [
    req.body.bokTitel,
    req.body.bokForfattare,
    req.body.bokIsbn,
    req.body.bokPris,
    req.body.bokKategoriId,
  ];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "Du har lagt till en ny bok!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
router.put("/api/books", async (req, res) => {
  let sql =
    "UPDATE bok SET bokTitel = ?, bokForfattare = ?, bokIsbn = ?, bokPris = ? WHERE bokId = ?";
  let params = [
    req.body.bokTitel,
    req.body.bokForfattare,
    req.body.bokIsbn,
    req.body.bokPris,
    req.body.bokId,
  ];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
router.delete("/api/books", async (req, res) => {
  console.log(req.body);
  let sql = "DELETE FROM bok WHERE bokId = ?";

  try {
    await connection.query(
      sql,
      [req.body.bokId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "Boken är nu raderad!",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
router.get("/api/books-categories", async (req, res) => {
  let sql =
    "SELECT * FROM kategori INNER JOIN bok ON kategori.kategoriId = bok.bokKategoriId";

  try {
    await connection.query(sql, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
