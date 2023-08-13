import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
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
        saucer_most_selling: {
            type: Schema.Types.String,
            require: true
        }
    }
)

export default model("Restaurant", restaurantSchema)