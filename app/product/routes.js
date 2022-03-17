const router = require('express').Router();
const connection = require('../../config/mysql');
const productController = require('./controller');

router.get('/products', productController.index);

router.get('/product/:id', productController.show);

router.post('/product', productController.create);

router.put('/product/:id', productController.update);

router.delete('/product/:id', productController.destroy);

module.exports = router;
