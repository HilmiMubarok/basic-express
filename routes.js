const router = require('express').Router();

router.get('/', (req, res) => {
	res.send({
		status: 'success',
		message: 'Hello World'
	});
});

module.exports = router;
