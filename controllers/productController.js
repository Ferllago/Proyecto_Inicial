const connection = require('../config/db');
const controller = {};

//Create Producto
controller.createProduct = (req,res)=>{
    let name_product = req.body.name_product;
    let brand = req.body.brand;
    let type = req.body.type;
    let description = req.body.description;
    let price = req.body.price;
    let stock = req.body.stock;
    let id_user = req.body.id_user
    let img = req.file.originalname;
    let sql = "INSERT INTO `product` set?";
    
    connection.query(sql, { name_product,id_user, brand, type, description, price, stock,img}, 
        (error, product) => {
            res.redirect('/products');
      });
}

//View Product

controller.seeProduct = (req,res)=>{
    let sql ="SELECT * FROM product LEFT JOIN user on user.id_user = product.id_user"

  connection.query(sql,(err,products)=>{
    if(err){
      throw err;
  }else{
      res.render('products',{ products : products })
  }
  })
}

//Edit Product
controller.editProduct = (req,res)=>{
    let id = req.params.id_product;
    connection.query("SELECT * FROM product WHERE id_product = ?", [id],(err,products)=>{
  
      res.render('product',{products : products[0]});
    } )
}

//UPDATE Product
controller.updateProduct = (req,res)=>{
    let id = req.params.id_product;
    let name_product = req.body.name_product;
    let id_user = req.body.id_user
    let brand = req.body.brand;
    let type = req.body.type;
    let description = req.body.description;
    let price = req.body.price;
    let stock = req.body.stock;
  
    console.log(req.body);
   
    let sql = "UPDATE product set? WHERE id_product =";
    
    connection.query(sql+id ,{name_product,id_user,brand,type,description,price,stock},
      (err,results)=>{
        res.redirect('/products');
    })
}

//DELETE Product

controller.deleteProduct = (req,res)=>{
    let id = req.params.id_product;
    let sql = "DELETE FROM product WHERE id_product =";
    
    connection.query(sql+id,
      (err,results)=>{
        res.redirect('/');
    })
}

//Filter
controller.filterProducto = (req,res)=>{
    let type = req.body.type;

    let sql =`SELECT * FROM product LEFT JOIN user on user.id_user = product.id_user WHERE type = '${type}'`

    connection.query(sql ,[type] ,(err,products)=>{
      console.log(products[0].type)
      if(err){
        throw err;
    }else{
        res.render('filter', {products})
    }
    })
}

//Onlyproduct
controller.seeOnlyProduct = (req,res)=>{
    let id = req.params.id_product;
    connection.query("SELECT * FROM product WHERE id_product = ?", [id],(err,products)=>{
      res.render('seeproduct',{products : products[0]});
    } )
}







module.exports = controller;