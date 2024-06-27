const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: false },
    createdAt: { type: String, required: true }
});

module.exports = mongoose.model('Query', QuerySchema);
