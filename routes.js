const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const path = require('path');

/* 
=== List Routes ===
	GET /
	GET /user/:id
	GET /:category/:tag
	GET /posts
	POST /products
		- title
		- price
		- description
	POST /profile
		- photo
*/

// Basic Route
router.get('/', (req, res) => {
	res.send({
		status: 'success',
		message: 'Hello World'
	});
});

// Dynamic Route
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

// Query String Route
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

// route post products
router.post('/product', (req, res) => {
	const { title, price, description } = req.body;
	res.json({
		status: 'success',
		data: {
			title,
			price,
			description
		}
	});
});

// upload profile photo to profile route
router.post('/profile', upload.single('photo'), (req, res) => {
	const image = req.file;

	if (!image) {
		return res.status(400).json({
			status: 'error',
			message: 'No image was uploaded'
		});
	}

	// rename image
	fs.rename(
		path.join(__dirname, `uploads/${image.filename}`),
		path.join(__dirname, `uploads/${image.originalname}`),
		(err) => {
			if (err) {
				return res.status(500).json({
					status: 'error',
					message: 'Error uploading photo'
				});
			}

			res.json({
				status: 'success',
				data: {
					name: image.originalname,
					path: `/uploads/${image.originalname}`
				}
			});

			// display image using sendfile
			// res.sendFile(path.join(__dirname, `uploads/${image.originalname}`));
		}
	);
});

module.exports = router;
