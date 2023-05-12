import express from "express";
import session from 'express-session'
import __dirname from "./utils.js";
import productsRouter from './routes/products.router.js'
import viewRouter from './routes/views.router.js'
import handlebars from 'express-handlebars'
import mongoose from "mongoose";
import productModel from "./dao/models/product.model.js";
import MongoStore from 'connect-mongo'
import passport from "passport";
import dotenv from 'dotenv'
import initPassport from "./config/passport.config.js";
import cookieParser from "cookie-parser";
import { addLogger } from "./logger.js";
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'

dotenv.config()
const app = express()
const MONGO_DB = process.env.MONGO_DB
console.log(`**** ${MONGO_DB} ****`)
mongoose.connect(MONGO_DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err,res)=>{
    if(!err){
        console.log('**** MONGO SUCCESSFULLY CONNECTED ****')
    }
    else{
        console.log('**** MONGO CONNECTION FAILED ****')
    }
})

const swaggerOption={
    definition:{
        openapi:'3.0.1',
        info:{
            title:'Documentación de proyecto de e-commerce',
            description:'Funciones de manejo de productos'
        }
    },
    apis:[`./docs/**.yaml`]
}

const specs=swaggerJsdoc(swaggerOption)
app.use('/apidocs',swaggerUiExpress.serve,swaggerUiExpress.setup(specs))

app.use(session({
    store:MongoStore.create({
        mongoUrl:MONGO_DB,
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:15
    }),
    secret:"secretCoder",
    resave:false,
    saveUninitialized:false
}))

app.engine("handlebars", handlebars.engine());

app.set('views', __dirname + "/views");
app.set('view engine', "handlebars");

app.use('/', viewRouter)
app.use('/api/products',productsRouter)

app.use(express.static('public'))
app.use(express.json());
app.use(cookieParser('SecretCoder'))

app.use(passport.initialize())
app.use(passport.session())

app.use(addLogger)
app.get('/',(req,res)=>{
    req.logger.warning('Alerta!')
    res.send({messagge:"Probando logger"})
})
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use('/api/products',productsRouter)
app.listen(8080,()=>console.log('Server arriba: 8080'))