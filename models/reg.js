import mongoose from "mongoose";
const regschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cpass:{
        type:String,
        required:true
    }
})
export default mongoose.model("Reg",regschema)