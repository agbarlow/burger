// Set up MySQL connection.
var mysql = require("mysql");


var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


const db = process.env.NODE_ENV === 'production'
            ? process.env.JAWSDB_URL
            : { host: process.env.MYSQL_HOST,
                port: process.env.MYSQL_PORT,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE };

/**
 * Call mysql.createConnection using db options and save to connection variable for export.
 */
const connection = mysql.createConnection(db);

/**
 * Connect to mysql server, otherwise console error.
 *
 * TODO Better implement mysql error handling.
 */
connection.connect((error) => {
    if (error)
        console.error(`MySQL connection error: ${error.stack}`);
    else
        console.log(`MySQL connection id ${connection.threadId}`);
});


// Export connection for our ORM to use.
module.exports = connection;
								