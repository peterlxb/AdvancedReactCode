const express = require("express");
const router = express.Router();
//const passportService = require("./services/passport");
const passport = require("passport");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");

const requireAuth = passport.authenticate("jwt", { session: false });

//Load User model
const User = require("./models/user");

//Get authentication middle
const Authentication = require("./controllers/authentication");

//@route GET api/users/test
//@desc Tests user here
//@access Pvivate
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email
    });
  }
);

//@route POST users/signup
//@desc Signup new user goes here
//@access Public
router.post("/signup", Authentication.signup, (req, res) => {
  return res.json({ msg: "Users Works" });
});

//@route POST users/signup
//@desc Signup new user goes here
//@access Public
router.post("/login", Authentication.login, (req, res) => {
  return res.json({ msg: "User login successed!" });
});

module.exports = router;
