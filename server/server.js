const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const response = require("./response");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

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
  const sql = `INSERT INTO register (username,email,password) VALUES ('${username}','${email}','${password}' ) `;
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

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
 