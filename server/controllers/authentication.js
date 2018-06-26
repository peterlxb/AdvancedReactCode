const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// function tokenForUser(user) {
//   return jwt.encode({}, keys.secretOrKey);
// }

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // See if a user with the givin email exists
  User.findOne({ email: email }).then(user => {
    // If a user with email does exist, return an error
    if (user) {
      return res.status(422).json({
        errors: "Email  exists"
      });
    } else {
      // If a user with email does NOT exist, create and save user record
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      // Respond to request indicating the user was created
      // generate salt for password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

exports.login = function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  User.findOne({
    email
  }).then(user => {
    //Check for user
    console.log(user);
    if (!user) {
      //errors.email = "User not found";
      return res.status(404).json({ errors: "User not found" });
    }

    //Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched

        //Create JWT payload
        const payload = {
          id: user.id
        };

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
              msg: "User login successed!",
              token: "Bearer " + token
            });
          }
        );
      } else {
        //errors.password = "password incorrect";
        return res.status(400).json({ errors: "password incorrect" });
      }
    });
  });
};
