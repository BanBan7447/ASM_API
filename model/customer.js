const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const customer = new Schema({
    id: {type: ObjectID},
    name: {
        type: String,
        required: true,
        default: 'No Name'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        default: 'No Password'
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        default: 'No Password'
    }
});

module.exports = mongoose.model.customer || mongoose.model('customers', customer);