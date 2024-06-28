const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    workerId: { type: String, unique: true },
    name: String,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    address: String,
    services: [String],
    age: String,
    serviceArea: String,
    experience: String,
    securityQuestion: String,
    securityAnswer: String,
});

module.exports = mongoose.model('Worker', workerSchema);
