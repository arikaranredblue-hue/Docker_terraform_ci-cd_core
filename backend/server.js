require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connectWithRetry, getDB } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// 🔥 IMPORTANT: Start app ONLY after DB is ready
connectWithRetry(() => {

  const db = getDB();

  // create table after DB connection
  db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100),
      password VARCHAR(100)
    )
  `, (err) => {
    if (err) {
      console.error("❌ Table creation error:", err);
    } else {
      console.log("✅ Table ready");
    }
  });

  // start server AFTER DB is ready
  app.listen(process.env.PORT || 3000, () => {
    console.log("🚀 Server running after DB ready");
  });

});