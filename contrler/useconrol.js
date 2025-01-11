import user from "../models/usermodel.js";
import bcrypt from 'bcrypt';
import  JsonWebToken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export function saveuser(req,res){
    const newuserdata = req.body;
    if(newuserdata.type=="admin"){
        if(req.user==null){
            res.json({
                masage:"plz log as a admin to create admin accounts"
            })
            return;
        }
        if(req.user.type != "admin")
        {
            res.json({
                masage:"plz log as a admin to create admin accounts"
            })
            return;
        }
    }
    
 
    newuserdata.password = bcrypt.hashSync(newuserdata.password,10);
    const newuser = new user(newuserdata);
   
    newuser.save().then(()=>{
        
        res.json({
            masage:"user saved"
        })
    }).catch((err)=>{
        res.json({
            error:err
        })
    }

)
}


export function finduser(req,res){

    user.find().then((userlist)=>{
        res.json({
            list:userlist
        })
    }).catch((err)=>{
        res.json({
            error:err
        })
    })
}

export function loginuser(req,res){
    user.find({email:req.body.email}).then((list)=>{
        if(list.length==0){
            res.json({
                masage:"plz frist sigin"
            })
        }
        else{
            const user= list[0];
            const ispass = bcrypt.compareSync(req.body.password,user.password);
            if(ispass){
                const token = JsonWebToken.sign({
                  email : user.email,
                  firstname : user.firstname,
                  lastname :user.lastname,
                  isBlocked :user.isBlocked,
                  type    :user.type,
                  profilepic:user.profilepic

                },process.env.SECRET)
                res.json({
                    massage:"usre login",
                    token:token
                })
            }
            else{
                res.json({
                    masage:"user plz entare valid password"
                })
            }
        }
    })
}

export function deleteuser(req,res){
    const email = req.body.email;
    user.deleteOne({email:email}).then(()=>{
        res.json({
            masage:"user deleted from the data base"
        })

    }).catch((err)=>{
    res.json({
           error:err
    })

 } )

}

export default isadmin(){
    
    if(req.body=="admin")
    {
        if(req.body==null){
            res.json({
                masage:"plz log as a admin"
            })
            return;
        }
        if(req.body.type!="admin")
        {
            res.json({
                masage:"plz log as a admin"
            })
            return;
        }
    }
}
export default iscustomer(){
    
    if(req.body=="customer")
    {
        if(req.body==null){
            res.json({
                masage:"plz log as a costomer"
            })
            return;
        }
        if(req.body.type!="customer")
        {
            res.json({
                masage:"plz log as a customer"
            })
            return;
        }
    }
}

//janedoe@example1.com",hashedPassword1(costomer)
//janedoe@example51.com,"hashedPassword10(adimn)