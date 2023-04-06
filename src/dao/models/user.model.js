import mongoose from "mongoose";
const collection = 'users'
const schema = new mongoose.Schema({
    first_name:{type:String,required: true},
    email :{type:String,required: true,unique:true},
    password:{type:String,required: true}
},
{timestamps:true,versionKey:false})
const userModel = mongoose.model(collection,schema)

export default userModel