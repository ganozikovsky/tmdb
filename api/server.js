// cfg del sv
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
require("./models");

const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(PORT, () => console.log(`server listenning on port ${PORT}`));
});
