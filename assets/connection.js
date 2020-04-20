const mysql = require('mysql');
const util = require("util");

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
    // askQuestions();
});

connection.query=util.promisify(connection.query);

module.exports = connection