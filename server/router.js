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
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  User.findOne({ email })
    .then(user => {
      //Check for user
      console.log(user);
      if (!user) {
        //errors.email = "User not found";
        return res.status(404).json({ errors: "User not found" });
      }

      //Check Password
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          //console.log("password", password);
          if (isMatch) {
            // User Matched

            //Create JWT payload
            const payload = { id: user._id };
            console.log("payload", payload);
            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 3600
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            //errors.password = "password incorrect";
            return res.status(400).json({ errors: "password incorrect" });
          }
        })
        .then(e => console.log(e));
    })
    .catch(e => console.log(e));
});

module.exports = router;
