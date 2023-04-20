import { encrypt,compare } from "./routes/sessions.router.js"
import appuserModel from './dao/models/user.model.js'
import productModel from './dao/models/product.model.js'

const loginCtrl=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await appuserModel.findOne({email})
        if(!user){
            res.status(404)
            res.send({error:'User not found'})
        }
        const checkPassword = await compare(password,user.password)
        if(checkPassword){
            res.send({payload:user})
        }
        if(!checkPassword){
            res.status(409)
            res.send({error:'Invalid password'})
            return
        }
    }catch(error){
        console.log('Error de inicio de sesión')
        res.send(error)
    }
}

const registerCtrl=async(req,res)=>{
    try{
        const{email,password,name}=req.body
        const passwordHash=await encrypt(password)
        const registerUser= await appuserModel.create({
            email,
            name,
            password:passwordHash
        })
        
        res.send({data:registerUser, messagge:'Success'})
    }catch(error){
        res.send(error)
    }
}

export {registerCtrl,loginCtrl}