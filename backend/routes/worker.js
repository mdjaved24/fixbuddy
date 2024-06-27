const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const Worker = require('../models/Worker');
const workersController = require('../controllers/workersController')

const router = express.Router();

// Route to fetch workers for a specific service
router.get('/:service', workersController.getWorkersByService);

// Worker Signup Route
router.post('/workerSignup', async (req, res) => {
    const { name, countryCode, phone, email, password, houseNo, roadNo, locality, city, state, pincode, services, age, serviceArea, experience, securityQuestion, securityAnswer } = req.body;

    try {
        // Check if worker already exists
        const existingWorker = await Worker.findOne({ email });
        if (existingWorker) {
            return res.status(400).send('Worker already exists');
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

         // Generate a unique worker_id
         const workerId = uuidv4();

        // Create new worker
        const newWorker = new Worker({
            workerId,
            name,
            phone: `${countryCode} ${phone}`,
            email,
            password: hashedPassword,
            address: {
                houseNo,
                roadNo,
                locality,
                city,
                state,
                pincode
            },
            age,
            services,
            serviceArea,
            experience,
            securityQuestion,
            securityAnswer,
        });

        // Save worker to the database
        await newWorker.save();
        res.send('Worker registered successfully');
        console.log("User data saved");
        
    } catch (err) {
        console.error('Error during worker registration:', err);
        res.status(500).send('Server error');
    }
});

// GET workers by service category
router.get('/:serviceCategory', workersController.getWorkersByService);
  
module.exports = router;
