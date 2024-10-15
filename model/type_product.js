const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const type_product = new Schema({
    id: { type: ObjectID },
    name: {
        type: String,
        required: true,
        default: 'No Name'
    }
});

module.exports = mongoose.type_product || mongoose.model('type_products', type_product);