const mysql = require("mysql2");

let db;

function connectWithRetry(callback) {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  db.connect((err) => {
    if (err) {
      console.log("❌ DB not ready, retrying in 3 sec...");
      setTimeout(() => connectWithRetry(callback), 3000);
    } else {
      console.log("✅ Connected to DB");
      callback(); // only continue after DB is ready
    }
  });
}

function getDB() {
  return db;
}

module.exports = { connectWithRetry, getDB };