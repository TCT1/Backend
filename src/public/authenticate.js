import {encrypt} from "../routes/sessions.router.js"
import {compare} from "../routes/sessions.router.js"

import userModel from '../dao/models/user.model.js'

export const loginCtrl=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await userModel.findOne({email})
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
        console.log('error')
    }
}

export const registerCtrl=async(req,res)=>{
    try{
        const{email,password}=req.body
        const passwordHash=await encrypt(password)
        const registerUser= await userModel.create({
            first_name,
            email,
            password:passwordHash
        })
        res.send({data:registerUser})
    }catch(error){
        res.send(error)
    }
}