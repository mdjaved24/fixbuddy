const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    const { name, countryCode, phone, email, password, houseNo, roadNo, locality, city, state, pinCode, securityQuestion, securityAnswer } = req.body;
    try {

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.status(400).send('User already exists');
        }

           // Hash password using bcrypt
           const salt = await bcrypt.genSalt(10);
           const hashedPassword = await bcrypt.hash(password, salt);

         // Generate a unique worker_id
         const userId = uuidv4();
            
        let user = new User({
            userId,
            name,
            phone: `${countryCode}${phone}`,
            email,
            password: hashedPassword,
            houseNo,
            roadNo,
            locality,
            city,
            state,
            pinCode,
            securityQuestion,
            securityAnswer
        });
        user = await user.save();
        res.json(user);
        console.log("User data saved");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
