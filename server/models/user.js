const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the model class
const User = mongoose.model("user", userSchema);

// Export the model
module.exports = User;
