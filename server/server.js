const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const response = require("./response");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

const corsOptions = {
  origin: "http://example.com",
  optionSuccessStatus: 200,
};

app.get("/", cors(corsOptions), (req, res) => {
  const sql = "SELECT * FROM nama_orang";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "success", res);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
