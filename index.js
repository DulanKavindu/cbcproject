import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import studentrouter1 from './routers/studentrouter.js';
import productrouter from './routers/productrouter.js';
import userrouter from './routers/userrouter.js';
import jsonwebtoken from 'jsonwebtoken';

const mongodburl="mongodb+srv://admin:123@cluster0.uq1tx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
mongoose.connect(mongodburl,{});
const connciton = mongoose.connection;

connciton.once("open",()=>{
    console.log("DATA BASE CREATED");
})

app.use(bodyParser.json());
app.use(
    (req,res,next)=>{
    const token = req.header("Authorization")?.replace("Bearer","");
   if(token!=null){
    jsonwebtoken.verify(token,"cbc-secrect-key-7973" , (error,decode)=>{
        if(!error){
            req.user=decode;

        }
    }
)
    
}
        next();

}
)
   








app.use('/api/studentl',studentrouter1);
app.use("/api/product",productrouter);
app.use("/api/user",userrouter);
//server eka start karnna ona anthimata
app.listen(5000,()=>{
    console.log("server run on 5000 port number");
});