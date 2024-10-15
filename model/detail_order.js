const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const detail_order = new Schema({
    id: {type: ObjectID},
    OrderID: {
        type: ObjectID,
        ref: 'orders'
    },
    ProductSize:{
        type: ObjectID,
        ref: 'product_sizes'
    },
    Quantity: {
        type: Number,
        require: true,
        default: 'No Quantity Product'
    },
    UnitPrice:{
        type: Number,
        require: true,
        default: 'No Unit Price'
    }
});

module.exports = mongoose.detail_order || mongoose.model('detail_orders', detail_order);