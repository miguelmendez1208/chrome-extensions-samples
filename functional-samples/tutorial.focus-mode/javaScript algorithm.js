const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'valuecartmysql.mysql.database.azure.com',
    user: 'your_username',
    password: 'your_password',
    database: 'valuecart'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
});

// now you can execute your queries here, e.g.:
connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if(err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

connection.end();