// consts declared to require npm packages
const mysql = require('mysql');
const util = require("util");

// server connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "sawyerROCK87",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

connection.query=util.promisify(connection.query);

module.exports = connection