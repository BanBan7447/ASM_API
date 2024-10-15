const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const product = new Schema({
    id: {type: ObjectID},
    Type:{
        type: ObjectID,
        ref: 'type_products'
    },
    Image: {
        type: String,
        required: true,
        default: 'No Image'
    },
    Name: {
        type: String,
        required: true,
        default: 'No Name'
    },
    BasePrice: {
        type: Number,
        required: true,
        default: 'No Base price'
    },
    Origin: {
        type: String,
        default: 'No Origin'
    },
    Desription: {
        type: String,
        required: 'true',
        default: 'No Desription'
    },
    Rating: {
        type: Number,
        default: 'No Rating'
    }
});

module.exports = mongoose.product || mongoose.model('products', product);