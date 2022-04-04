const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/sequelize');

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	avatar: {
		type: DataTypes.STRING,
		allowNull: true
	}
});

module.exports = User;
