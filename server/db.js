const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "online_courses",
});

db.connect((err) => {
  if (err) {
    console.log({ error: err.stack });
    return;
  }
  console.log("connected as id " + db.threadId);
});

module.exports = db;
