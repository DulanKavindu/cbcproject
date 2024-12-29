import mongoose from "mongoose";
const studentschema= mongoose.Schema({
    name : String,
    age : Number,
    gender : String
})
const student1 = mongoose.model("studentp",studentschema);

export default student1;