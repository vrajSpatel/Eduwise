const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;
const origin = process.env.ORIGIN;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(
  cors({
    origin,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.get("/", (_, res) => {
  res.send("welcome to backend");
});
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
