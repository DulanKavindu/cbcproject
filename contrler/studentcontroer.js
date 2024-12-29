import student1 from "../models/studentmodel.js";
export function savestudent(req,res){

    
        const newstudentp = new student1(req.body);
    
        newstudentp.save().then(()=>{
            res.json({
                masage : "student saved"
            })
        }).catch(()=>{
            res.json({
                masage : "student not saved"
            })
        })
        
    
    }

    export function studentfind(req,res){
        student1.find().then((studentlist)=>{
                 res.json({
                    list : studentlist
                 })
        }).catch((err)=>{
                res.json({
                    error : err
                    
                })
        })

        
    }
        
   

