const express = require('express');

const app = express();
const router = require('./routes');
const log = require('./middleware/logger');

app.use(log);
app.use(router);

app.listen(3333, () => console.log('Server started on port 3333'));
