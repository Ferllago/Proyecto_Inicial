var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')
let userController = require('../controllers/userController');
let productController = require('../controllers/productController');

/* GET home page. */

//READ
router.get('/', userController.readUser);

//IR A LA VISTA PRODUCTS
router.get('/products', productController.seeProduct);

//IR A LA VISTA USERS
router.get('/users', userController.seeUser);


module.exports = router;