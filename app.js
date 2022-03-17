const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes');
const log = require('morgan');
const path = require('path');

app.use(cors());
app.use(log('dev'));

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

app.listen(process.env.PORT || 5000, () => console.log('Server started'));
