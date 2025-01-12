import mongoose from "mongoose";

const odersceema = mongoose.Schema({
    oderid:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    odritemes:{
        type: String,
        required: true
    },
    price:{
        type: number,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    image:[
        {
            type: String,
            required: true  
        }
    ],
    date:{
        type:date,
        default:Date.now
    },
    paymatid:{
        type: String,
        required: true  
    },
    status:{
        type:String,
        default:"pending"
    },
    notes:{
        type:String
    },
    name:{
        type: String,
        required: true  
    },
    address:{
        type: String,
        required: true  
    },
    phonenumber:{
        type: String,
        required: true  
    }


})
const oder = mongoose.model("odres",odersceema);
export default oder;