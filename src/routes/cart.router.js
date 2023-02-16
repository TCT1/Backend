import { Router } from "express";
import cartP from "../dao/dbManager/cartP.manager.js";

const router = Router()
const cartProductsManager = new cartP()

router.get('/',async(req,res)=>{
    let products = await cartProductsManager.getAll()

    if(!products) return res.status(500).send({status:"error:",error:"No pude traer información"})

    res.send({status:"success",payload:products})
})

router.post('/',async(req,res)=>{
    const {title,quantity,price,img} = req.body
    
    let result =await cartProductsManager.saveProduct({
        title,
        quantity,
        price,
        img
    })

    res.send({status:"success",payload:result})
})

export default router