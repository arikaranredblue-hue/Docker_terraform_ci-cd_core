require("dotenv").config();

const express = require("express");
const cors = require("cors");
const getDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

setTimeout(() => {
  const db = getDB();
  db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100),
      password VARCHAR(100)
    )
  `);
}, 5000);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
