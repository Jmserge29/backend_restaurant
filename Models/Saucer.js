import { Schema, model } from "mongoose";

const schemaSaucer = new Schema(
    {
        name: {
            type: Schema.Types.String,
            require: true
        }, 
        price: {
            type: Schema.Types.Decimal128,
            require: true
        },
        duration_cooking: {
            type: Schema.Types.Decimal128,
            require: true
        }
    }
)

export default model("Saucer", schemaSaucer)