import express from 'express'
import moment from "moment";
import dotenv from 'dotenv'
import './Database.js'
import morgan from 'morgan';
import { createSaucers } from './Libs/InitialSetupRestaurant.js';
import SaucerRoute from './Routes/saucers.routes.js'
import OrderRoute from './Routes/order.routes.js'
dotenv.config()
var time = moment().format('MMMM Do YYYY, h:mm:ss a');

const app = express();

app.listen(process.env.PORT || 8089, async()=> {
    console.log(`The server running in the Port ${process.env.PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
createSaucers()
app.use("/Saucer", SaucerRoute)
app.use("/Order", OrderRoute)


app.use("/", (req, res)=>{
    res.send(`Hey Dev!, the server is running ${time}`)
})