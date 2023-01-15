import express from "express";
import handlebars from "express-handlebars"
import path from "path"
import __dirname from "./utils.js";

const app = express()

app.engine("handlebars", handlebars.engine())

app.set('views',__dirname + "/views")
app.set("view engine","handlebars")

app.use(express.static(path.join(__dirname,'views')))

let products = []

class productManager{
    constructor(){
        this.id = 0
    }

    addProduct(title,description,price,code,stock){
        if(title&&description&&price&&code&&stock != undefined){
            const producto = {
                title,
                description,
                price,
                code,
                stock,
                id: this.id
            }

            if(products.find((producto)=>producto.code === code)){
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

    deleteProduct(id){
        if(products.find((producto) => producto.id === id)){
            products.splice(id)
            console.log(`El producto con ID: ${id} fue eliminado`)
        }else{
            console.log("Not found")
        }
    }
}

let productos = new productManager()
productos.addProduct(
    "iPhone",
    "celular",
    35000,
    4,
    1500
)
productos.addProduct(
    "ZTE",
    "celular",
    35000,
    3,
    600
)
productos.addProduct(
    "iPad",
    "tableta",
    35000,
    2,
    400
)
productos.addProduct(
    "HP",
    "laptop",
    86500,
    1,
    20
)

app.get('/',(req,res)=>{
    let testUser={name:"Leonardo",lastname:"Juventino",role:"admin"}
    res.render('index', {user:testUser,isAdmin:testUser.role==="admin",products})
})

const server=app.listen(8080,()=>console.log("server arriba"))