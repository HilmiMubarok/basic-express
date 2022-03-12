const express = require('express');

const app = express();
const router = require('./routes');
const log = require('./middleware/logger');

app.use(log);

// use url encoded
app.use(express.urlencoded({ extended: true }));

// use express.json
app.use(express.json());

app.use(router);

// 404 Not Found Route
app.use((req, res, next) => {
	res.send({
		status: 404,
		message: 'Not Found'
	});
});

app.listen(3333, () => console.log('Server started on port 3333'));
