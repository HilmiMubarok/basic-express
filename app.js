const express = require('express');
const cors = require('cors');
const app = express();
const log = require('morgan');
const path = require('path');

const UserRouter = require('./app/user/router');

app.use(cors());
app.use(log('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.json({ message: 'Hello World.' });
});

app.use('/api', UserRouter);

app.use((req, res, next) => {
	res.status(404);
	res.send({
		status: 'failed',
		message: 'Resource ' + req.originalUrl + ' not found'
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
