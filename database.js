const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: 'mysql-119174-0.cloudclusters.net', // MYSQL HOST NAME
    user: 'useM6', // MYSQL USERNAME
    password: '1234/.,m', // MYSQL PASSWORD
    database: 'dbM6' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;