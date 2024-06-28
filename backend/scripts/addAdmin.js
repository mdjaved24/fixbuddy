const mongoose = require('mongoose');
const Admin = require('../models/Admin');

mongoose.connect('mongodb://localhost:27017/fixbuddy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const admin = new Admin({
    name: 'Md Javed',
    email: 'mdjav077@gmail.com',
    password: 'javed24@',
    phone: '9142450358'
});

admin.save()
    .then(() => {
        console.log('Admin added');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error adding admin:', err);
        mongoose.connection.close();
    });
