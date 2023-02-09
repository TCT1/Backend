import productModel from "../models/product.model.js";

export default class Products{
    constructor(){
        console.log("Working in mongoDB")
    }

    getAll = async ()=>{
        let products = await productModel.find()
        return products.map(product=>product.toObject())
    }

    saveProduct = async product =>{
        let result = await productModel.create(product)
        return result
    }
}