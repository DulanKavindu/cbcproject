import product from "../models/productmodele.js";
import {isadmin,iscustomer} from "../contrler/useconrol.js";


export  function saveproduct(req,res){
if(!isadmin(req)){
    res.json({
        masage:"plz log as an admin"
    })

}
    const newproductdata = req.body;
    const newprodut = new product(newproductdata);
    newprodut.save().then(()=>{
        res.json({
            masage:"product save"
        })
    }).catch((error)=>{
        res.json({
            masage:error
        })
    })

}
export  function getproduct(){
    product.find().then((productlist)=>{
        res.json({
            masage:productlist
        })
    }).catch((error)=>{
        res.json({
            masage:error
        })
    })
}