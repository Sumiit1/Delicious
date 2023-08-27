const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        adjective: { type: String},
        desciption: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
        imageUrl:{ type: String, required: true }
    }
)

module.exports = mongoose.model('Product', ProductSchema);

