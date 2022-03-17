const connection = require('../../config/mysql');

const index = (req, res) => {
	// adding search functionality
	if (req.query.keyword) {
		const keyword = req.query.keyword;
		const query = `SELECT * FROM products WHERE name LIKE '%${keyword}%'`;
		connection.query(query, (err, results) => {
			if (err) {
				return res.send(err);
			}
			return res.send(results);
		});
	} else {
		connection.query(
			{
				sql: 'SELECT * FROM products'
			},
			_response(res)
		);
	}
};

const search = (req, res) => {
	const { keyword } = req.query;
	connection.query(
		{
			sql: `SELECT * FROM products WHERE name LIKE '%${keyword}%'`
		},
		_response(res)
	);
};

const show = (req, res) => {
	connection.query(
		{
			sql: 'SELECT * FROM products WHERE id = ?',
			values: [ req.params.id ]
		},
		_response(res)
	);
};

const create = (req, res) => {
	connection.query(
		{
			sql: 'INSERT INTO products SET ?',
			values: [ req.body ]
		},
		_response(res)
	);
};

const update = (req, res) => {
	connection.query(
		{
			sql: 'UPDATE products SET ? WHERE id = ?',
			values: [ req.body, req.params.id ]
		},
		_response(res)
	);
};

const destroy = (req, res) => {
	connection.query(
		{
			sql: 'DELETE FROM products WHERE id = ?',
			values: [ req.params.id ]
		},
		_response(res)
	);
};

const _response = (res) => {
	return (err, result) => {
		if (err) res.json({ status: 'error', message: err });
		res.json({
			status: 'success',
			data: result
		});
	};
};

module.exports = {
	index,
	search,
	show,
	create,
	update,
	destroy
};
