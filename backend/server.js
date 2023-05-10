const express = require("express");
const app = express();
const cors = require("cors");
const movieRoutes = require("./routes/routes");
const port = 3000;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  Connection: "keep-alive",
  methods: ["POST", "GET", "PUT", "DELETE"],
};

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(corsOptions));
app.use("/", cors(corsOptions), movieRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
