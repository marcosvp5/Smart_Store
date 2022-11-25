const express = require("express");
const app = express();
const routes = require("./routes");
const volleyball = require("volleyball");
const cors = require("cors");

const client = require("./config/db");
const cookieparser = require("cookie-parser");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(volleyball);
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log("api working!...");
});
