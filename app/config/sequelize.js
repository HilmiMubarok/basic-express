const { Sequelize } = require('sequelize');

if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
	const sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		port: 5432,
		host: 'ec2-3-223-213-207.compute-1.amazonaws.com',
		logging: true //false
	});
	(async () => {
		try {
			await sequelize.authenticate();
			console.log('Connection has been established successfully.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	})();
	module.exports = sequelize;
} else {
	const sequelize = new Sequelize({
		dialect: 'mysql',
		host: 'localhost',
		username: 'root',
		password: '',
		database: 'expressdb'
	});
	(async () => {
		try {
			await sequelize.authenticate();
			console.log('Connection has been established successfully.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	})();
	module.exports = sequelize;
}
