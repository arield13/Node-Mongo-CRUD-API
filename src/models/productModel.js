// This is a simple example using Mongoose for MongoDB

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // Other fields as needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
