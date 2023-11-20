const http = require('http');
const express = require('express');
const bodyParsar = require('body-parser');
   
const app =express();
// here we are just importing the routes form the admin js 
const adminRouter = require('./routes/admin')
app.use('/admin',adminRouter);

const shopRouter = require('./routes/shop')
app.use(shopRouter);

// what is the name of the channel in the same rate of the time period
// in express js middlware work on the top to bottom , if we commented the next method from 1st 
//middleware express not call to tje second

// app.use('/',(req,res,next) =>{
//     console.log("This is always runs !");
//     next();
// })

  console.log("This is the type of the everer")
  app.use(bodyParsar.urlencoded({extended : false}));

// app.use('/add-product',(req,res,next) => {
//         console.log("Neeraj in first middleware")
//         res.send(`
//         <form action = "/product" method = "POST"> 
//         <label for="fname">Enter product name:</label> 
//         <input type="text" id="fname" name="fname"><br>
//         <button type="submit"value="Submit"> Submit Product </button> 
//         </form>`);

//        // next();  // allow the middlware to request to the next middlware
// });

// app.use('/product',(req,res,next) => {
//     res.redirect('/');
// });

// here each USE function is consider as the middlware  and next method call the next middlware method

// app.use('/',(req,res,next) =>{
//     console.log("This is second middlware in the file time");

//     res.send("<h1>This is the first express js app </h1>")
// })


// page is not found error page responce
app.use((req,res,next) =>{
  res.status(404).send('<h1>This is the error page </h1>')
})


const server = http.createServer(app);
 
app.listen(3000);    


