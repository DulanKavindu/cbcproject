import oder from "../models/odermodel.js";
import { iscustomer } from "../contrler/useconrol.js";

export async function createoder(req,res){
    if(!iscustomer){
        res.json({
            massage:"frist you have to login"
        })
        return;
    }
    try{
    const presoderid = await oder.find().sort({date :-1}).limit(1)
    let oderid;
    if(presoderid.length==0){
        oderid="cbc0001"
    }else{
        const currentoderid= presoderid[0]. oderid;
        const remove = currentoderid.replace("cbc ", "")
        const tonumber = parseInt(remove);
        const newnumber = (tonumber + 1).toString().padStart(4, "0");
        oderid="cbc"+newnumber
    }
         const newoderdata = req.body;
         newoderdata.oderid=oderid;
         newoderdata.email=req.user.email;

         const newoder = new oder(newoderdata);

         await newoder.save()
         res.json({
            massage:"oder create"
         })


    }catch(error){
        res.json({
            massage:error
         })
    }

}