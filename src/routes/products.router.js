import { Router } from "express";
import Products from '../dao/dbManager/product.manager.js'

const router = Router()
const productsManager = new Products()

router.get('/',async(req,res)=>{
    let products = await productsManager.getAll()

    if(!products) return res.status(500).send({status:"error:",error:"No pude traer información"})

    res.send({status:"success",payload:products})
})

router.post('/',async(req,res)=>{
    const {title,description,price} = req.body
    
    let result =await productsManager.saveProduct({
        title,
        description,
        price
    })

    res.send({status:"success",payload:result})
})

export default router