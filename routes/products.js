var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
let productController = require('../controllers/productController');

/* GET users listing. */
router.get('/',productController.seeProduct);

//UPDATE

router.get('/edit/:id_product',productController.editProduct);

router.post('/update/:id_product',productController.updateProduct)

//DELETE

router.get('/delete/:id_product',productController.deleteProduct)

//Solo un producto

router.get('/product/:id_product',productController.seeOnlyProduct);

//filter get
router.post('/filter/', productController.filterProducto);


module.exports = router;
