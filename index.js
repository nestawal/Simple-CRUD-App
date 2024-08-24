
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Database = require('./database')//how to import
const Product = require('./models/product.model.js')
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req,res) => {
    res.send("hello from Node API updated");
});

//find all data
app.get('/api/products',async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

//add a product
app.post('/api/products',async (req,res) => {
    try{
        
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

//get by id
app.post('/api/product/:id',async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(req.body);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

//update a product
app.put('/api/product/:id',async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(req.body);

        if(!product){
            return res.status(404).json({message: "product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

//delete a product
app.delete('/api/product/:id',async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

mongoose.connect(Database)//connect to database
.then(()=>{
    console.log("database connected");
    app.listen(3000, () => {
        console.log("running on 3000");
    });
    
})
.catch(()=>{
    console.log("failed connection");
})