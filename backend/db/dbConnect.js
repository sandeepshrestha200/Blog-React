const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/blogapp";


const connectToMongo = () => {
  mongoose.connect(mongoURI);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB Successfully");
  });
};


module.exports = connectToMongo;
