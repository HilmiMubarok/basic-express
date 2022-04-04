const fs = require('fs');
const path = require('path');

const User = require('../user/model');

const index = async (req, res) => {
	try {
		await User.sync();
		const result = await User.findAll();
		res.send(result);
	} catch (error) {
		res.send(error);
	}
};

const view = async (req, res) => {
	try {
		const result = await User.findByPk(req.params.id);
		res.send(result);
	} catch (error) {
		res.send(error);
	}
};

const store = async (req, res) => {
	const { name, email } = req.body;
	const avatar = req.file;
	if (avatar) {
		const imagePath = path.join(__dirname, '../../public/' + avatar.originalname);
		fs.renameSync(avatar.path, imagePath);
		try {
			await User.sync();
			const result = await User.create({
				name,
				email,
				avatar: `http://localhost:5000/public/${avatar.originalname}`
			});
			res.json(result);
		} catch (error) {
			res.send(error);
		}
	} else {
		res.send(user);
	}
};

const update = async (req, res) => {
	const { name, email } = req.body;
	const avatar = req.file;
	if (avatar) {
		const imagePath = path.join(__dirname, '../../public/' + avatar.originalname);
		fs.renameSync(avatar.path, imagePath);
		try {
			await User.sync();
			const result = await User.update(
				{
					name,
					email,
					avatar: `http://localhost:5000/public/${avatar.originalname}`
				},
				{
					where: {
						id: req.params.id
					}
				}
			);
			res.json(result);
		} catch (error) {
			res.send(error);
		}
	} else {
		try {
			await User.sync();
			const result = await User.update(
				{
					name,
					email
				},
				{
					where: {
						id: req.params.id
					}
				}
			);
			res.json(result);
		} catch (error) {
			res.send(error);
		}
	}
};

const destroy = async (req, res) => {
	try {
		await User.sync();
		const result = await User.destroy({
			where: {
				id: req.params.id
			}
		});
		res.json(result);
	} catch (error) {
		res.send(error);
	}
};

module.exports = { index, view, store, update, destroy };
