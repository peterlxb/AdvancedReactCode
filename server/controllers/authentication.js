const User = require("../models/user");
const bcrypt = require("bcryptjs");

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
