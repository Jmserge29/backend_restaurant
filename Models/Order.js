import { Schema, model } from "mongoose";

const schemaOrder = new Schema([
    {
        orderId: {
            type: Schema.Types.ObjectId,
            require: true
        },
        timestamp: {
            type: Schema.Types.String,
            require: true
        },
        status: {
            type: Schema.Types.String,
            require: true
        },
        customers: [
            {
                customerId: {
                    type: Schema.Types.ObjectId
                },
                orders: [
                    {
                        saucer: {
                            type: Schema.Types.String,
                        },
                        price: {
                            type: Number
                        }
                    }    
                ]
            }
        ],
        final_value: {
            types: Number
        }
    },
])

export default model("Order", schemaOrder)