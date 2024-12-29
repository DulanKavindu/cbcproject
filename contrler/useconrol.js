import user from "../models/usermodel.js";
import bcrypt from 'bcrypt';
import  JsonWebToken from "jsonwebtoken";

export function saveuser(req,res){
    const newuserdata = req.body;
   
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
        if(list.lenth==0){
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
                  firstname : user.firstname ,
                  lastname :user.lastname,
                  isBlocked :user.isBlocked,
                  type    :user.type,
                  profilepic:user.profilepic

                },"cbc-secrect-key-7973")
                res.json({
                    massage:"usre login",
                    token:token
                })
            }
            else{
                res.json({
                    masage:"user plz entare valid email"
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