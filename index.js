import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import studentrouter1 from './routers/studentrouter.js';
import productrouter from './routers/productrouter.js';
import userrouter from './routers/userrouter.js';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from "dotenv";


//end ekata dapu semi colon ; eke aula thibila thiyenne

dotenv.config();
const app = express();

const mongodburl = process.env.MONGO_DB_URL;
mongoose.connect(mongodburl, {}); 
const connciton = mongoose.connection;

connciton.once("open",()=>{
    console.log("DATA BASE CREATED");
})

app.use(bodyParser.json());
app.use(
    (req,res,next)=>{
    //oyage code eke me palleha line keth waraddak thiyenawa. Bearer kiyana ekata passen space ekak enna ona
    const token = req.header("Authorization")?.replace("Bearer ","");
   if(token!=null){
    jsonwebtoken.verify(token,process.env.SECRET, (error,decode)=>{
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