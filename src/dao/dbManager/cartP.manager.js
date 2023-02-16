import cartPModel from "../models/cartP.model.js";

export default class cartP{
    constructor(){
        console.log("Working in mongoDB")
    }

    getAll = async ()=>{
        let products = await cartPModel.find()
        return products.map(product=>product.toObject())
    }
}