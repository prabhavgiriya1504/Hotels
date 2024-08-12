const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet','sour','spicy'],
        required: Boolean,
        default: false
    },
    ingredients: {
        type: String,
        required: Boolean,
        default: false
    }
})

const Menu = mongoose.model('menu', menuSchema);
module.exports = Menu;