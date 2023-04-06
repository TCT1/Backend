import cartPModel from "../models/cartP.model.js";

export default class cartP{
    getAll = async ()=>{
        let products = await cartPModel.find()
        return products.map(product=>product.toObject())
    }
}