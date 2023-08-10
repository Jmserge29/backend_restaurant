import Order from '../Models/Order.js'
import moment from 'moment'

var time = moment().format('MMMM Do YYYY, h:mm:ss a');

const createOrder = async(req, res) => {
    try {
        console.log(req.body)
        const {customers} = req.body
        if(!customers) return res.status(400).json({success: false, message: "The customers is required"})
        
        var valueFinal
        customers.map((customer) => {
            customer.order.map((data) => {
                valueFinal = valueFinal + data.price
            })
        })



        const newOrder = new Order(
            {

                status: "Pending",
                valueFinal
            }
        )




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

export default {
    getsOrders,
    createOrder
}