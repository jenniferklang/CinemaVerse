const express = require("express");
const app = express();
const cors = require("cors");
const bookRoutes = require("./routes/routes");
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("public"));
app.use("/", bookRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
