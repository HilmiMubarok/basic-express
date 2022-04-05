const { Sequelize } = require('sequelize');

if (process.env.URI) {
	const sequelize = new Sequelize(process.env.URI, {
		dialect: 'postgres',
		protocol: 'postgres',
		port: 5432,
		logging: true,
		host: 'ec2-3-223-213-207.compute-1.amazonaws.com',
		username: 'nnjbowupfswmbh',
		password: 'fc64437e0e430bb4fc8105c98e75c190c9a7c9dbf426bf1f8595b3f46386b2f5',
		database: 'del80u0juuh8dr'
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
