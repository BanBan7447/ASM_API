const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const payment = new Schema({
    id: {type: ObjectID},
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.payment || mongoose.model('payments', payment);