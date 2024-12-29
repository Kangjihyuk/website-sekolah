const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const response = require("./response");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

//cors global
app.use(
  cors({
    origin: "http://localhost:5173", // domain react
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const assetsPath = "./resources/assets";
if (!fs.existsSync(assetsPath)) {
  fs.mkdirSync(assetsPath, { recursive: true });
}

//middeleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assets", express.static(path.join(__dirname, "./resources/assets")));
const PORT = process.env.PORT;

//configuration multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, assetsPath); // Set the directory to store files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // membuat file dengan nama unik
  },
});

const upload = multer({ storage });

//testing api
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//ambil semua data dari api
app.get("/data", (req, res) => {
  const sql = "SELECT * FROM courses";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "success", res);
  });
});

// upload image
app.post("/data", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No image uploaded." });
  }

  const values = [
    req.body.title,
    req.body.description,
    req.body.category,
    req.body.price,
    req.body.duration,
    req.body.rating,
    req.file.filename,
  ];

  const checkSql = `SELECT COUNT(title) AS count FROM courses WHERE title = ?`;

  db.query(checkSql, [req.body.title], (err, fields) => {
    try {
      if (fields[0].count > 0) {
        return response(500, null, "title dengan nama ini sudah ada", res);
      }
      if (err) {
        return response(
          500,
          { "ini eror": err.message },
          "Error while inserting data",
          res
        );
      }
    } catch (error) {
      err.message;
    }
  });

  const sql = `INSERT INTO courses (title, description, category, price, duration,rating, images) VALUES (?)`;

  db.query(sql, [values], (err, fields) => {
    if (err) {
      return response(500, err, "Error while inserting data", res);
    }
    if (fields?.affectedRows) {
      const data = {
        id: fields.insertId,
        isSuccess: fields.affectedRows,
      };
      return response(200, data, "Course created successfully", res);
    }
  });
});

//register
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const sql = `INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}' ) `;
  db.query(sql, (err, fields) => {
    if (err) response(500, err, "not found", res);
    if (fields?.affectedRows) {
      const data = {
        id: fields.insertId,
        isSuccess: true,
      };
      response(200, data, "success", res);
    }
    console.log(fields);
  });
});

//login
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
  });
});

app.get("/comments", (req, res) => {
  const sql = "SELECT * FROM komentar";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "data dari database", res);
    console.log(fields);
  });
});

app.post("/comments", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No image uploaded." });
  }
  const { name, komentar, kelas } = req.body;
  if (!name?.trim() || !komentar?.trim() || !kelas?.trim()) {
    return response(400, null, "All fields are required", res);
  }
  const file = req.file.filename;
  const sql = `INSERT INTO komentar (nama,komentar,kelas_yang_dikomentar,images) VALUES (?,?,?,?)`;
  db.query(sql, [name, komentar, kelas, file], (err, fields) => {
    if (err) {
      console.log({ "database error": err.message });
      return response(500, err, "Error while inserting data", res);
    }

    if (fields?.affectedRows > 0) {
      const data = {
        id: fields.insertId,
        isSuccess: true,
      };
      response(200, data, "data berhasil ditambahkan", res);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
