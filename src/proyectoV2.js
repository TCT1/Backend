import express from "express";
const app=express()
const server=app.listen(8080,()=>console.log("proyectoV2.js en puerto 8080"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const products = []

/* class productManager{
    constructor(){
        this.id = 0
    }

    addProduct(title,description,price,stock){
        if(title&&description&&price&&stock != undefined){
            const producto = {
                title,
                description,
                price,
                stock,
                id: this.id
            }

            if(this.products.find((producto)=>producto.code === code)){
                console.log("El producto ya existe")
            }else{
                this.id++
                products.push(producto)
                console.log("Producto agregado")
            }
        }
        else{
            console.log("Error, faltan valores")
        }
    }
}

let productos = new productManager() */

app.post('/api/producto',(req,res)=>{
    let producto = req.body;
    if(!producto.title || !producto.description || !producto.price || !producto.stock){
        return res.status(400).send({status:"error",error:"Información incompleta"})
    }
    products.push(producto);
    res.send({status:"Ok",message:"Producto creado "})
    console.log("Usuario Ok");
})


app.get('/api/products',(req,res)=>{
    res.send(products)
})

/* Presenté dificultades con el avance de esta entrega por lo 
tanto este es un avance solamente y se presenta en varias partes, tanto en este archivo como en los siguientes:

proyecto.js
apps.js
*/