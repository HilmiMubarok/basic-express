const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public' });

const UserController = require('../user/controller');

router.get('/users', UserController.index);
router.get('/users/:id', UserController.view);
router.post('/users', upload.single('avatar'), UserController.store);
router.put('/users/:id', upload.single('avatar'), UserController.update);
router.delete('/users/:id', UserController.destroy);

module.exports = router;
