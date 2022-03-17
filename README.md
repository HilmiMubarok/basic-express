# LEARN BASIC EXPRESSJS

**A simple RESTFULL API using [ExpressJS]('https://expressjs.com'), [MySQL](https://mysql.com), and [Sequelize]('https://sequelize.org).**

How To Run

	npm start

Edit the config file on

	app/config/db.config.js


List Routes

	GET /api/users
	GET /api/users/:id
    GET /api/users?name={$name}
    POST /api/users
		- name
		- email
    PUT /api/users/:id
    DELETE /api/users/:id
    DELETE /api/users/ <= Delete all users