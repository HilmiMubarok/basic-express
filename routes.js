const { route } = require('express/lib/application');

const router = require('express').Router();

router.get('/', (req, res) => {
	res.send({
		status: 'success',
		message: 'Hello World'
	});
});

// Dynamic route
router.get('/user/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		status: 'success',
		message: `Hello User ${id}`
	});
});

router.get('/:category/:tag', (req, res) => {
	const { category, tag } = req.params;
	res.json({
		status: 'success',
		category,
		tag
	});
});

module.exports = router;
