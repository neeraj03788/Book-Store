const express= require("express");
const mongoose= require("mongoose"); 
const router =  require("./routes/book-routes");
const cors = require('cors');

 const app= express();

//  middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);



 mongoose.connect("mongodb+srv://admin:h1uxCScI9oziqQMJ@cluster0.qp8oa.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>{
     console.log("connected with data base")
 })

 app.listen(5000,function(){ 
     console.log("server started on port 5000")
 })
 
 // h1uxCScI9oziqQMJ