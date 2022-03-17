// connection to database mysql
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'expressdb'
});

module.exports = connection;
