import mongoose from "mongoose";

const collection = 'AppUsers'
const schema = new mongoose.Schema({
    name:{type:String,required: true},
    email :{type:String,required: true,unique:true},
    password:{type:String,required: true}
})
const appuserModel = mongoose.model(collection,schema)

export default appuserModel