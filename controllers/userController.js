const connection = require('../config/db');
const controller = {};


//Create User
controller.createUser = (req,res)=>{
    let {name,lastname,username,email,pass,is_admin} = req.body;
    let sql = "INSERT INTO `user` set?";
  
    connection.query(sql, { name,lastname, username, email, pass, is_admin }, (error, product) => {
      if(error){
        throw error
    }else{
        res.redirect('/users');
    }
  });
}
//View Create
controller.seeCreate = (req,res)=>{
    let sql ="SELECT * FROM product LEFT JOIN user on user.id_user = product.id_user;"

    connection.query(sql,(err,products)=>{
      if(err){
        throw err;
    }else{
        res.render('create',{ products : products })
    }
    })
}
//View User
controller.seeUser = (req,res)=>{
    let sql ="SELECT * FROM user"

    connection.query(sql,(err,products)=>{
      if(err){
        throw err;
    }else{
        res.render('users',{ products : products })
    }
    })
}
//Read User
controller.readUser = (req,res)=>{
  let sql ="SELECT * FROM product LEFT JOIN user on user.id_user = product.id_user"
  connection.query(sql,(err,products)=>{
    if(err){
      throw err;
  }else{

      res.render('index',{ products : products})
  }
  })
}

//Edit User
controller.editUser = (req,res)=>{
    let id = req.params.id_user;
    connection.query("SELECT * FROM user WHERE id_user = ?", [id],(err,products)=>{
  
      res.render('user',{products : products[0]});
    } )
}

//Update User
controller.updateUser = (req,res)=>{
    let id = req.params.id_user;
  let name = req.body.name;
  let lastname = req.body.lastname;
  let username = req.body.username;
  let email = req.body.email;
  let pass = req.body.pass;
  let is_admin = req.body.is_admin;
  let sql = "UPDATE user set? WHERE id_user =";
  
  connection.query(sql + id ,{name,lastname,username,email,pass,is_admin},
    (err,results)=>{
      res.redirect('/users');
  })
}

//Delete User

controller.deleteUser = (req,res)=>{
    let id = req.params.id_user;
    let sql = "DELETE FROM user WHERE id_user = ?";
    
    connection.query(sql,[id],
      (err,results)=>{
        res.redirect('/users');
    })
}

module.exports = controller;