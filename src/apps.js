import express from "express";
import productsRouter from "./routes/products.router.js"
import path from "path"
import __dirname from "./utils.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, "./public")))

app.use("/api/products", productsRouter)

const server=app.listen(8080,()=>console.log("Server on"))