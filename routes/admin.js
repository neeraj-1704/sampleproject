const express = require('express');

const path = require('path')
// here we are importing the router FROM EXPRESS
const router = express.Router();

// with the help of the use router reference we are calling the middleware 

// some time we have same path for the routing so we use the  at start as /admin

//admin/add-product  => GET req
router.get('/add-product',(req,res,next) => {
    console.log("Neeraj in first middleware")
    // res.send(`
    // <form action = "/admin/add-product" method = "POST"> 
    // <label for="fname">Enter product name:</label> 
    // <input type="text" id="fname" name="fname"><br>
    // <button type="submit"value="Submit"> Submit Product </button> 
    // </form>`);

    res.sendFile(path.join(__dirname),'../','views','add-product.html');


   // next();  // allow the middlware to request to the next middlware
});

//admin/add-product  => GET req
router.post('/add-product',(req,res,next) => {
    console.log(req.body);
res.redirect('/');
});

module.exports = router;