const express = require('express');
const Query = require('../models/Query');
const User = require('../models/User');
const Worker = require('../models/Worker');

const router = express.Router();

// Route to submit a new query
router.post('/submitQuery', async (req, res) => {
    const { name, phone, email, message } = req.body;

    try {
        // Find user or worker by email
        const user = await User.findOne({ email });
        const worker = await Worker.findOne({ email });

        const queryData = {
            name,
            phone,
            email,
            message,
            userId: user ? user._id : null,
            workerId: worker ? worker._id : null
        };

        // Create a new query
        const newQuery = new Query(queryData);
        await newQuery.save();
        res.status(201).json({ message: 'Query submitted successfully' });
    } catch (err) {
        console.error('Error submitting query:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
