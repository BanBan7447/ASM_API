const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const size = new Schema({
    id: { type: ObjectID },
    name: {
        type: String,
        required: true,
        default: 'No name'
    }
});

module.exports = mongoose.size || mongoose.model('sizes', size);