const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const response = require("./response");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
const port = 5000;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 