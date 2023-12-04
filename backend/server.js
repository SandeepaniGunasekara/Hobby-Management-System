const express = require("express");
const app = express();
const sql = require("mysql2");
const cors = require("cors");

const port = 5000;

const dbConfig = {
  user: "root",
  password: "",
  server: "localhost",
  database: "hobby",
};

const db = new sql.createConnection(dbConfig);

app.use(express.json());
app.use(cors());

app.get("/login", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`listening on port ${port}!`));
