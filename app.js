const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
const router = require('./routes');
const log = require('./middleware/logger');
const path = require('path');
const req = require('express/lib/request');

app.use(log);

// use url encoded
app.use(express.urlencoded({ extended: true }));

// use express.json
app.use(express.json());

// express static path join uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(router);

// 404 Not Found Route
app.use((req, res, next) => {
	res.send({
		status: 404,
		message: 'Not Found'
	});
});

app.listen(4000, () => console.log('Server started on port 4000'));
