require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SERECT = process.env.JWT_SERECT;

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("access-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using valid token." });
  }
  try {
    const data = jwt.verify(token, JWT_SERECT);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using valid token." });
  }
};

module.exports = fetchuser;

/*  {
  "message": "User Logged in successfully.",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3MWJhNzQyZmNiYThlMTVjNWI2ZTVjIn0sImlhdCI6MTcwMTk1NTQ0Nn0.E9W0ZQ0VLEFeJYO0Gmxfsp4bAl5d5NQggx5QcD_ys3Q"
} */
