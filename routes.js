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

// Query String
router.get('/posts', (req, res) => {
	const { page, limit } = req.query;
	res.json({
		status: 'success',
		data: [
			{
				id: 1,
				title: 'Post 1',
				body: 'This is the body of post 1'
			},
			{
				id: 2,
				title: 'Post 2',
				body: 'This is the body of post 2'
			},
			{
				id: 3,
				title: 'Post 3',
				body: 'This is the body of post 3'
			}
		],
		page,
		limit
	});
});

module.exports = router;
