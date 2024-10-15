const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const product_size = new Schema({
    id: {type: ObjectID},
    SizeID: {
        type: ObjectID,
        ref: 'sizes'
    },
    ProductID:{
        type: ObjectID,
        ref: 'products'
    },
    price_size: {
        type: String,
        require: true,
        default: 'No Price Size'
    },
});

module.exports = mongoose.product_size || mongoose.model('product_sizes', product_size);