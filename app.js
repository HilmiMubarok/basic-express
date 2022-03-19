const express = require('express');
const cors = require('cors');
const app = express();
const log = require('morgan');
const path = require('path');

app.use(cors);
app.use(log('dev'));

// use url encoded
app.use(express.urlencoded({ extended: true }));

// use express.json
app.use(express.json());

// express static path join uploads folder
app.use('/public', express.static(path.join(__dirname, 'public')));

const db = require('./app/models');
db.sequelize.sync();

app.get('/', (req, res) => {
	res.json({ message: 'Hello World.' });
});

require('./app/routes/user.routes.js')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
