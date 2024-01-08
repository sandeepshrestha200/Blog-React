const connectToMongo = require("./dbConnect");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

connectToMongo();
const port = 5000;

app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Blogs Server is listening on http://localhost:${port}`);
});
