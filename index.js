
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const mysql = require("mysql");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { log } = require("console");
app.set(4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({
  origin: "http://localhost:5173"
}));
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "v18135w00*#.",
  database: "juan"
};
app.use(mysqlConexion(mysql, dbConfig, "single"));



  
console.log("kdkd");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola, está funcionando");
  console.log("jdjdj");
});



app.use(express.static(path.join(__dirname, "public")));

app.listen(4200, () => {
  console.log("Server running on port 3000");
 
});
