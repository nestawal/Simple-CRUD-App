
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Database = require('./database');//how to import
const Product = require("C:\Users\USER\Desktop\Simple-Crud app\models\productModel.js");
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products',productRoute)



app.get('/', (req,res) => {
    res.send("hello from Node API updated");
});





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