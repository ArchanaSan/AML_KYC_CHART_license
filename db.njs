var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password: "123456789",
    database : 'wallet'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;