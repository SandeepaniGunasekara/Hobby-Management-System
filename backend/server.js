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

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.query(
        `SELECT * FROM users WHERE email='${email}' AND password='${password}'`,
        (err, result) => {
        if (err) {
            res.send({ err: err });
        }
    
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "Wrong email/password combination!" });
        }
        }
    );
});

app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
        res.send({ err: err });
        }
        if (result.length > 0) {
        res.send(result);
        } else {
        res.send({ message: "No users found!" });
        }
    });
});

app.post("/newUser", (req, res) => {
    const { name, email, address, phones } = req.body;
    db.query(
        `INSERT INTO users (name, email, address) VALUES ('${name}', '${email}', '${address}')`,
        (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        }
    );
    phones.forEach((phone) => {
        db.query(
        `INSERT INTO contact (user_id, name, number) VALUES ((SELECT id FROM users WHERE email='${email}'), '${phone.description}', '${phone.number}')`,
        (err, result) => {
            if (err) {
            res.send({ err: err });
            }
        }
        );
    });
    res.send({ message: "User created!" });
});



app.listen(port, () => console.log(`listening on port ${port}!`));
