var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')

router.get('/', function(req, res) {
	res.render('login', { error: "", is_admin: "0", user: {} });
});

router.post('/', function(req, res) {
	var username = req.body.username;
    var pass = req.body.pass;
	if (username && pass) {
		connection.query('SELECT * FROM user WHERE username = ? AND pass = ?', [username, pass], function(error, results, fields) {
			if (results.length > 0) {
              //recupero los datos del usuario de login
              let id_user = results[0].id_user;
              
              let name = results[0].name;

              let lastname = results[0].lastname;

              let username = results[0].username;

              //establezco los valores en la sesion
              req.session.is_admin = results[0].is_admin;

              req.session.user = { name, lastname, username, id_user };

              //cargo la pagina que yo quiero enviandole de vuelta a products estos datos
  
              res.render('index', { is_admin: req.session.is_admin, user: req.session.user, error: ""  });

			} else {


				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});








module.exports = router;