import { json } from "express";
import product from "../models/productmodele.js";
export function productsave(req,res){
    console.log(res.use);
const newproduct = new product(req.body);

newproduct.save().then(()=>{
    
    res.json({
        masage:"product saved"
    })
}).catch((error)=>{
    res.json({
        masage:error
    })
})

}

export async function productfind(req,res){

    try{
    
   const productlist = await product.find()
        res.json({
            list:productlist
        })
    }catch(e){
        res.json({
            error:e
        })
    }

       
    

}

export function deleteproduct(req,res){
    const name =req.body.name;
  
    product.deleteOne({name:name}).then(()=>{
        res.json({
            masage:"product delete"
        })
    }).catch((err)=>{
        res.json({
            error:err
        })
    })
}

export function findproductbyname(req,res){
    const name = req.params.name;
    product.find({name:name}).then((productlist)=>{
        res.json({
            list:productlist
        })
    }).catch((err)=>{
        res.json({
            error:err
        })
    })
}