const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const response = require("./response");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  const sql = "SELECT * FROM courses";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "success", res);
  });
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const sql = `INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}' ) `;
  db.query(sql, (err, fields) => {
    if (err) response(500, err, "not found", res);
    if (fields?.affectedRows) {
      const data = {
        id: fields.insertId,
        isSuccess: fields.affectedRows,
      };
      response(200, data, "success", res);
    }
    console.log(fields);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return response(400, null, "not found", res);
  const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}' `;
  db.query(sql, [email, password], (err, fields) => {
    if (err) response(500, err, "not found", res);
    if (fields.length === 0) response(400, err, "not found", res);
    const user = fields[0];
    if (user.password !== password)
      return response(400, err, "invalid email or password", res);

    response(200, user, "success", res);
    console.log(fields);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
 