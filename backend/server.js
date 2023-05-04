const express = require("express");
const app = express();
const cors = require("cors");
const movieRoutes = require("./routes/routes");
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use("/", movieRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
