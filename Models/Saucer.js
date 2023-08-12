import { Schema, model } from "mongoose";

const schemaSaucer = new Schema(
    {
        name: {
            type: Schema.Types.String,
            require: true
        }, 
        picture: {
            type: String
        },
        price: {
            type: Number,
            require: true
        },
        duration_cooking: {
            type: Number,
            require: true
        },
        quantity_ordered: {
            type: Number,
            require: true
        }
    }
)

export default model("Saucer", schemaSaucer)