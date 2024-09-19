const express = require('express');
const connectDB =require('./connection')
const student =require('./routes/student')
const app = express();
connectDB();
app.use(express.json())
app.use(student)
app.listen(3000,(err)=>{
    if(err){
         console.log(err)
         }
    else{
        console.log("server running on port 3000");
    }
})