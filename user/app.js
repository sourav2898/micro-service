const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const connect = require("./db/db");

connect();

app.use(cookieParser); // for reading cookies
app.use(express.urlencoded({ extended: true })); // so that we can receive data in body
app.use(express.json()); // to receive data in the body

// creating routes
app.use("/", userRoutes);

module.exports = app;
