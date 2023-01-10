const fs = require("fs")
fs.writeFileSync("./productosArchivo.txt","")
class productManager{
    constructor(){
        this.products = []
        this.id = 0
    }

    addProduct(title,description,price,thumbnail,code,stock){
        if(title&&description&&price&&thumbnail&&code&&stock != undefined){
            const producto = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id: this.id
            }

            if(this.products.find((producto)=>producto.code === code)){
                console.log("El producto ya existe")
            }else{
                this.id++
                this.products.push(producto)
                console.log("Producto agregado")
                if(fs.existsSync("./productosArchivo.txt")){
                    fs.appendFileSync("./productosArchivo.txt", this.products(producto))
                }
            }
        }
        else{
            console.log("Error, faltan valores")
        }
    }

    getProducts(){
        console.log(this.products)
    }

    getProductById(id){
        if(this.products.find((producto) => producto.id === id)){
            console.log(this.products.filter((producto) => producto.id === id))
        }else{
            console.log("Not found")
        }
    }

    deleteProduct(id){
        if(this.products.find((producto) => producto.id === id)){
            console.log(this.products.splice(id))
        }else{
            console.log("Not found")
        }
    }
}

let productos = new productManager()

productos.addProduct(
    "iPhone14",
    "celular",
    35000,
    "foto",
    4,
    1500
)
productos.addProduct(
    "iPhone13",
    "celular",
    35000,
    "foto",
    3,
    600
)
productos.addProduct(
    "iPhone12",
    "celular",
    35000,
    "foto",
    2,
    600
)


productos.getProducts()
productos.deleteProduct(2)
productos.getProducts()


/* Nota: No supe como implementar la función de updateProduct y también tuve un error en el hecho de agregar 
los productos al archivo txt que se crea */