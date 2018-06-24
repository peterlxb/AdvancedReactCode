// Main starting point of the application
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
// App Setup

//Body parser and morgan middleware
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./router");

// Server Setup
const port = process.env.PORT || 3090;

//Use Routes middleware
app.use("/user", users);

app.listen(port, () => console.log(`Server running on port ${port}`));
