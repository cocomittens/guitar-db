// Get an instance of mysql we can use in the app
const mysql = require("mysql2");

// Create a 'connection pool' using the provided credentials
const pool = mysql
  .createPool({
    waitForConnections: true,
    connectionLimit: 10,
    host: "classmysql.engr.oregonstate.edu",
    user: "cs340_stoddaco",
    password: "wyuuG1hNDIz8",
    database: "cs340_stoddaco",
  })
  .promise(); // This makes it so we can use async / await rather than callbacks

// Export it for use in our application
module.exports = pool;
