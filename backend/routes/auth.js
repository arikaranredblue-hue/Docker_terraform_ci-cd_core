const express = require("express");
const router = express.Router();
const getDB = require("../db");

// REGISTER
router.post("/register", (req, res) => {
  const db = getDB();
  const { username, password } = req.body;

  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json({ message: "User registered ✅" });
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const db = getDB();
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username=? AND password=?";
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (results.length > 0) {
      res.json({ message: "Login successful ✅" });
    } else {
      res.status(401).json({ message: "Invalid credentials ❌" });
    }
  });
});

module.exports = router;   