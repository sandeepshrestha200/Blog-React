require("dotenv").config();
const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SERECT = process.env.JWT_SERECT;

// ROUTE 1 : Create a User using: POST "/api/auth/createuser/". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("username", "Enter a valid name.").isLength({ min: 3 }),
    body("email", "Enter a valid email.").isEmail(),
    body("password", "Enter a valid password (minimum 5 characters).").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ $or: [{ email }, { username }] });

      if (user) {
        if (user.email === email) {
          return res.status(400).json({ message: "Email already exists" });
        } else {
          return res.status(400).json({ message: "Username already exists" });
        }
      }

      const salt = await bcrypt.genSalt(10);

      var hashPass = await bcrypt.hash(req.body.password, salt);

      user = new User({
        username,
        email,
        password: hashPass,
      });

      await user.save();
      const data = {
        user: {
          id: user.id,
        },
      };

      const accessToken = jwt.sign(data, JWT_SERECT);
      success = true;
      res.json({ success, message: "User created successfully.", accessToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2 :  Authenticate a User using: POST "/api/auth/login". Doesn't require Auth
router.post("/login", [body("identifier", "Enter a valid email or password.").exists(), body("password", "Password cannot be empty).").exists()], async (req, res) => {
  // returning errors for bad requests
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { identifier, password } = req.body;
  var success = false;
  try {
    var user = await User.findOne({ $or: [{ email: identifier }, { username: identifier }] });
    if (!user) {
      success = false;
      return res.status(400).json({ success, message: "Try Again!, Invalid User credentials." });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    // console.log(passwordCompare);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, message: "Try Again!, Invalid User credentials." });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const accessToken = jwt.sign(data, JWT_SERECT);
    success = true;
    res.json({ success, message: "User Logged in successfully.", accessToken });
  } catch (error) {
    // console.error(error.message);
    res.status(500).send("Internal Server Error.");
  }
});

module.exports = router;
