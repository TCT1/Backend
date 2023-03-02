import express from "express";
import session from 'express-session'
import FileStore from 'session-file-store'
import __dirname from "./utils.js";
import productsRouter from './routes/products.router.js'
import viewRouter from './routes/views.router.js'
import handlebars from 'express-handlebars'
import mongoose from "mongoose";
import productModel from "./dao/models/product.model.js";
import sessionRouter from './routes/sessions.router.js'
import MongoStore from 'connect-mongo'
import passport from "passport";
import initPassport from "./config/passport.config.js";

const app = express()
const connection = mongoose.connect("mongodb+srv://Leonardo:champion08@codercluster.0g0vp2u.mongodb.net/?retryWrites=true&w=majority")

app.use(session({
    store:MongoStore.create({
        mongoUrl:"mongodb+srv://Leonardo:champion08@codercluster.0g0vp2u.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:15
    }),
    secret:"secretCoder",
    resave:false,
    saveUninitialized:false
}))

initPassport()

app.use(passport.initialize())
app.use(passport.session())

app.engine("handlebars", handlebars.engine());

app.set('views', __dirname + "/views");
app.set('view engine', "handlebars");

app.use('/', viewRouter)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use('/api/products',productsRouter)
app.use('/api/session',sessionRouter)

const server = app.listen(8080,()=>console.log('Server arriba: 8080'))