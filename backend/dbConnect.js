const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/blogapp";

// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log("Connected to Mongo Successfully");
//   });
// };

const connectToMongo = () => {
  mongoose.connect(mongoURI);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB Successfully");
  });
};

// const connectToMongo = () => {
//   if (mongoose.connect(mongoURI)) {
//     console.log("Connected to MongoDB");
//   } else {
//     console.log("Unable Connect to MongoDB");
//   }
// };

// connectToMongo().catch((err) => console.log(err));

// async function connectToMongo() {
//   await mongoose.connect(mongoURI);
//   console.log("Connected to MongoDB Successfully");

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

module.exports = connectToMongo;
