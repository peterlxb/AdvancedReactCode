// Main starting point of the application
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
// App Setup

//Body parser and morgan middleware
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./router");

// Server Setup
const port = process.env.PORT || 3090;

//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("mongo conncted");
  })
  .catch(err => console.log(err));

//Use Routes middleware
app.use("/user", users);

app.listen(port, () => console.log(`Server running on port ${port}`));
