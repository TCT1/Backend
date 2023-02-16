import mongoose from 'mongoose'

const cartPCollection = 'cartFinalProyect'

const cartPSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
    },
    price:{
        type:Number,
        require:true
    },
    img:{
        type:String
    }
})

const cartPModel = mongoose.model(cartPCollection,cartPSchema)
export default cartPModel