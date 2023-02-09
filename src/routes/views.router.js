import { Router } from "express";
import Products from "../dao/dbManager/product.manager.js";

const router = Router()
const productsManager = new Products()

router.get('/',async(req,res)=>{
    let products = await productsManager.getAll()
    console.log(products)
    res.render('home',{products})
})

export default router