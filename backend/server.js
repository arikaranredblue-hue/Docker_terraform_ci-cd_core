require("dotenv").config();

const express = require("express");
const cors = require("cors");
const getDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// 🔥 NEW: reliable DB connection with retry
function connectDB() {
  const db = getDB();

  db.query("SELECT 1", (err) => {
    if (err) {
      console.log("DB not ready, retrying...");
      setTimeout(connectDB, 3000); // retry every 3 sec
    } else {
      console.log("DB connected ✅");

      // create table only after DB is ready
      db.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(100),
          password VARCHAR(100)
        )
      `, (err) => {
        if (err) {
          console.error("Table creation error:", err);
        } else {
          console.log("Table ready ✅");
        }
      });
    }
  });
}

// call it once when app starts
connectDB();

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});