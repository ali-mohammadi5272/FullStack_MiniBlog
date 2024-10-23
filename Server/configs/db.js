require("dotenv").config();
const mysql = require("mysql2");
const { configs } = require("../utils/env");

const { db } = configs;

const connectToMySQL = () => {
  const connection = mysql.createConnection({
    port: db.port,
    user: db.user,
    password: db.password,
    database: db.name,
    host: db.host,
  });
  connection.connect((err) => {
    if (err) {
      process.exit(1);
    }
    console.log("Connnect to Database successfully :))");
  });
};

module.exports = connectToMySQL;
