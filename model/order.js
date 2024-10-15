const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const order = new Schema({
    id:{type: ObjectID},
    customerID:{
        type: ObjectID,
        ref: 'customers'
    },
    Date: {
        type: String,
        require: true,
        default: 'No Date Orders',
    },
    TotalPrice:{
        type: Number,
        require: true,
        default: 'No Total Price Orders'
    },
    PaymentOders:{
        type: ObjectID,
        ref: 'payments'
    }
});

module.exports = mongoose.order || mongoose.model('orders', order);