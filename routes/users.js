var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')
let userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.seeUser);

//EDIT
router.get('/edit/:id_user',userController.editUser);

//UPDATE

router.post('/update/:id_user',userController.updateUser);

//DELETE

router.get('/delete/:id_user',userController.deleteUser)

module.exports = router;
