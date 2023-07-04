const mongoose = require('mongoose');

const products = new mongoose.Schema({
    nameProduct: {
        type: String,
        required: true
    },
    codeProduct: {
        type: String,
        required: true
    },
    codeTypeProduct: {
        type: String,
        required: true
    },
    typeProduct: {
        type: String,
        required: true
    },
    producerProduct: {
        type: String,
        required: true
    },
    sizeProduct: {
        type: String,
        required: true
    },
    quantityProduct: {
        type: Number,
        required: true
    },
    descriptionProduct: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model('productsmodel', products);
module.exports = { productModel };
