import { Schema, model } from "mongoose";

const schemaRestaurant = new Schema([
    {
        name: {
            type: Schema.Types.String,
            require: true
        },
        profit: {
            type: Number,
            require: true
        },
        cant_customers: {
            type: Number,
            require: true
        },
        cant_orders: {
            type: Number,
            require: true
        },
        // lastOrder: {
        //     type: Schema.Types.ObjectId,
        //     require: true
        // },
        saucer_most_selling: {
            type: Schema.Types.ObjectId,
            ref: 'Saucer',
            require: true
        }
    }
])

export default model("Restaurant", schemaRestaurant)