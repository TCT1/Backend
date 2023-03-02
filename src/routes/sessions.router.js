import { Router } from "express";
import passport from 'passport'
import userModel from "../dao/models/user.model.js";
import { createHash,isValidPassword } from "../utils.js";

const router = Router()
router.post('/register',passport.authenticate('register',{failureRedirect:'/failregister'}),async(req,res)=>{
    res.send({status:'success',message:'Usuario Registrado'})
})

router.get('/failregister',async(req,res)=>{
    console.log('Fallo la estrategia')
    res.send({error:'failed'})
})

router.post('/login', passport.authenticate('login',{failureRedirect:'/faillogin'}),async(req,res)=>{
    const {email,password} = req.body
    if(!req.user) return res.status(400).send({status:'error',error:'contraseña invalida'})

    req.session.user = {
        first_name:req.user.first_name,
        last_name:req.user.last_name,
        age:req.user.age,
        email:req.user.email
    }

    res.send({status:'success',payload:req.user})
})

router.get('/faillogin',async(req,res)=>{
    console.log('Fallo la estrategia')
    res.send({error:'failed'})
})

export default router