// connection to database mysql
var mysql = require('mysql');

// add config using environment variables
var connection = {
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || 'expressdb'
};

module.exports = connection;
