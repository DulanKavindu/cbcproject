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

export function productfind(req,res){
    
    product.find().then((productlist)=>{
        res.json({
            list:productlist
        })


        }).catch((error)=>{
  
            res.json({
               masage:error
            })
    
})
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