const express =  require("express");
const Product = require("./models/product.model.js");
const router = express.Router();
const {getProducts,getProduct,updateProduct,deleteProduct} = require('./controllers/product.controller.js');

//find all data
router.get('/',getProducts);
//find through id
router.get('/:id',getProduct);

//create product
router.post("/",createProduct);

//update a product
router.put("/:id",updateProduct);

//delete a product
router.delete("/:id",deleteProduct);

module.exports = router;