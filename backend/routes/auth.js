require("dotenv").config();
const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const Admin = require("../models/Admin");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SERECT = process.env.JWT_SERECT;

// User Routes

// ROUTE 1 : Create a User using: POST "/api/auth/users/register". Doesn't require Auth
router.post(
  "/users/register",
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
    var success = false;

    try {
      let user = await User.findOne({ $or: [{ email }, { username }] });

      if (user) {
        if (user.email === email) {
          success = false;
          return res.status(400).json({ success, message: "Email already exists" });
        } else {
          success = false;
          return res.status(400).json({ success, message: "Username already exists" });
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

// ROUTE 2 :  Authenticate a User using: POST "/api/auth/users/login". Doesn't require Auth
router.post("/users/login", [body("identifier", "Enter a valid email or password.").exists(), body("password", "Password cannot be empty).").exists()], async (req, res) => {
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

// Admin Routes

// ROUTE 3 : Create a Admin using: POST "/api/auth/admins/register". Doesn't require Auth
router.post(
  "/admins/register",
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
      let admin = await Admin.findOne({ $or: [{ email }, { username }] });

      if (admin) {
        if (admin.email === email) {
          return res.status(400).json({ message: "Email already exists" });
        } else {
          return res.status(400).json({ message: "Username already exists" });
        }
      }

      const salt = await bcrypt.genSalt(10);

      var hashPass = await bcrypt.hash(req.body.password, salt);

      admin = new Admin({
        username,
        email,
        password: hashPass,
      });

      await admin.save();
      const data = {
        admin: {
          id: admin.id,
        },
      };

      const accessToken = jwt.sign(data, JWT_SERECT);
      success = true;
      res.json({ success, message: "Admin created successfully.", accessToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 4 :  Authenticate a User using: POST "/api/auth/admins/login". Doesn't require Auth
router.post("/admins/login", [body("identifier", "Enter a valid email or password.").exists(), body("password", "Password cannot be empty).").exists()], async (req, res) => {
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
    var admin = await Admin.findOne({ $or: [{ email: identifier }, { username: identifier }] });
    if (!admin) {
      success = false;
      return res.status(400).json({ success, message: "Try Again!, Invalid Admin credentials." });
    }
    const passwordCompare = await bcrypt.compare(password, admin.password);
    // console.log(passwordCompare);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, message: "Try Again!, Invalid Admin credentials." });
    }
    const data = {
      admin: {
        id: admin.id,
      },
    };
    const accessToken = jwt.sign(data, JWT_SERECT);
    success = true;
    res.json({ success, message: "Admin Logged in successfully.", accessToken });
  } catch (error) {
    // console.error(error.message);
    res.status(500).send("Internal Server Error.");
  }
});

// ROUTE 5 :  Get Logged in Userdetails using: POST "/api/auth/getuser". Required Auth
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json( user );

     
  } catch (error) {
    // console.error(error.message);
    res.status(500).send("Internal Server Error.");
  }
});

module.exports = router;
