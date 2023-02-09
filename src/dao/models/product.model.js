import mongoose from 'mongoose'

const productCollection = 'productsFinalProyect'

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        default:"none"
    },
    price:{
        type:Number,
        require:true
    }
})

const productModel = mongoose.model(productCollection,productSchema)
export default productModel