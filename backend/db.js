const mysql = require("mysql2");

let db;

function connectWithRetry() {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  db.connect(err => {
    if (err) {
      console.log("DB not ready, retrying...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Connected to DB ✅");
    }
  });
}

connectWithRetry();

module.exports = () => db;
