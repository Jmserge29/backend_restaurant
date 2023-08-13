import { Schema, model } from "mongoose";

const schemaOrder = new Schema([
    {
        final_value: {
            type: Schema.Types.Number,
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
        order: [
            {
                saucer: {
                    type: Schema.Types.String,
                },
                price: {
                    type: Schema.Types.Number
                },
                customer: {
                    type: Schema.Types.String,
                },
            }
        ],
    },
])

export default model("Order", schemaOrder)