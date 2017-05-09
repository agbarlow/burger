// Set up MySQL connection.
var mysql = require("mysql");


var connection;


if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});
}


/*
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
								