import Order from '../Models/Order.js'
import moment from 'moment'
import Restaurant from '../Models/Restaurant.js';
import SaucersCtrl from './SaucersController.js';
import Saucer from '../Models/Saucer.js';

var time = moment().format('MMMM Do YYYY, h:mm:ss a');

const createOrder = async(req, res) => {
    try {
        // Desestructuramos la informacion del cuerpo JSON
        const {customers} = req.body
        // Realizamos validaciones pertinentes
        if(!customers) return res.status(400).json({success: false, message: "The customers is required"})
        
        // Buscamos en la base de datos la informacion del Restaurant y validamos
        const restaurantFind = await Restaurant.findOne({name: "Restaurante Sasón Barranquillero"}).catch((err) => {
            console.log(err)
            return res.status(400).json({success: false, message: "An error has been in the process :("})
        })

        if(!restaurantFind ) return res.status(400).json({success: false, message: "The Restaurant hasn't been created :("})

        var valueFinal = 0
        var arrayCustomers = []
        var updateArray = []
        customers.map((customer) => {
            customer.order.map((saucerD) => {
                arrayCustomers.push({saucer: saucerD.saucer, price: saucerD.price, customer: customer.name})
            })
            customer.order.map((data) => {
                updateArray.push(data.saucer)
                valueFinal = valueFinal + data.price
            })
        })

        await Promise.all(updateArray.map(async(data) => {
            await Saucer.updateOne({ name: data }, { $inc: { quantity_ordered: 1 } }).then(() => {
                console.log("Saurce incremented quantity Ordered succesly!")
            })
        }))

        const newOrder = await new Order(
            {
                order: arrayCustomers,
                status: "Pending",
                final_value: valueFinal,
                timestamp: time
            }
        ).save()

        console.log("Order created successly!")

        const cantidad_clientes = restaurantFind.cant_customers + customers.length;
        var profitAcum = restaurantFind.profit + valueFinal;
        const cantOrdersDB = await Order.estimatedDocumentCount()
        const mostSoldSaucer = await SaucersCtrl.findBestSellingSaucer()
        console.log(mostSoldSaucer)

        await Restaurant.updateOne({_id: restaurantFind._id}, { cant_customers: cantidad_clientes, profit: profitAcum, cant_orders: cantOrdersDB, saucer_most_selling: mostSoldSaucer}).then(() => {
            console.log('The length customers has been updated in the database: ', cantidad_clientes);
        });

        return res.status(200).json({success: true, data: newOrder})

    } catch (error) {
        console.log(`An error has ocurred in the server :( ${error}`)
    }
}


const getsOrders = async(req, res) => {
    try {
        const orders = await Order.find({}).catch((error) => {
            return res.status(400).json({success: false, message: "Error in the find of the orders"})
        })
        if(!orders || orders==null) return res.status(404).json({success: false, message: "The orders not foun in the database"})
        return res.status(200).json({success: true, data: orders})
    } catch (error) {
        console.log(`An error has ocurred in the server :( ${error}`)
    }
}

const getsOrdersPending = async(req, res) => {
    try {
        const orders = await Order.find({status: "Pending"}).catch((error) => {
            return res.status(400).json({success: false, message: "Error in the find of the orders"})
        })
        if(!orders || orders==null) return res.status(404).json({success: false, message: "The orders not foun in the database"})
        return res.status(200).json({success: true, data: orders})
    } catch (error) {
        console.log(`An error has ocurred in the server :( ${error}`)
    }
}


export default {
    getsOrders,
    createOrder,
    getsOrdersPending
}