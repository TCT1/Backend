import express from "express";
import __dirname from "./utils.js";
import productsRouter from './routes/products.router.js'
import viewRouter from './routes/views.router.js'
import handlebars from 'express-handlebars'
import mongoose from "mongoose";
import productModel from "./dao/models/product.model.js";

const app = express()
const connection = mongoose.connect("mongodb+srv://Leonardo:champion08@codercluster.0g0vp2u.mongodb.net/?retryWrites=true&w=majority")

app.engine("handlebars", handlebars.engine());

app.set('views', __dirname + "/views");
app.set('view engine', "handlebars");

app.use('/', viewRouter)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use('/api/products',productsRouter)

const server = app.listen(8080,()=>console.log('Server arriba: 8080'))