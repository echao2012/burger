// Dependencies
const mysql = require("mysql");
require("dotenv").config();

// Import MySQL database credentials
const keys = require("../keys.js");

// DB connection settings
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: keys.mySqlDb.user,
    password: keys.mySqlDb.pw,
    database: "burgers_db"
});

// Make the connection
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection.connect(function(err) {
        if(err) {
            console.error("Error connection: " + err.stack);
            return;
        }
        console.log("Connected to DB as ID: " + connection.threadId);
    });
}

// Export the connection for ORM to use
module.exports = connection;