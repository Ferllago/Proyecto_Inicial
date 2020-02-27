var express = require('express');
var router = express.Router();
const multer = require('multer');
let userController = require('../controllers/userController');
let productController = require('../controllers/productController');

const storage =  multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage })

//See Create

router.get('/', userController.seeCreate);

//Form Products
router.post('/productos',upload.single("img"),productController.createProduct)

//Form User
router.post('/user',userController.createUser);

module.exports = router;