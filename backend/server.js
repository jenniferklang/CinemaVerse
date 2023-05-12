const express = require('express')
const app = express()
const cors = require('cors')
const movieRoutes = require('./routes/routes')
const port = 3000
const mongoRoute = require('./routes/mongo-route')
const sortingRoutes = require('./routes/sorting-routes')
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  Connection: 'keep-alive',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
}

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/bookingDb')
    console.log('connected')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
start()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors(corsOptions))
app.use('/', cors(corsOptions), movieRoutes)
app.use('/', cors(corsOptions), mongoRoute)
app.use('/', cors(corsOptions), sortingRoutes)
// app.post('/books', async (req, res) => {
//   let bookTitle = req.body.bokTitel
//   let bookAuthor = req.body.bokForfattare

//   try {
//     const newBook = new BookModel({
//       book: bookTitle,
//       author: bookAuthor,
//     })
//     const insertedBook = await newBook.save()
//     return res.status(201).json(insertedBook)
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     })
//   }
// })

// app.get('/books', async (req, res) => {
//   try {
//     const allBooks = await BookModel.find()
//     return res.status(200).json(allBooks)
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     })
//   }
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
