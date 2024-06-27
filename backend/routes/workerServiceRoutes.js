// routes/workerServiceRoutes.js
const express = require('express');
const Worker = require('../models/Worker');

const router = express.Router();

// GET workers by service category
router.get('/:serviceCategory', async (req, res) => {
    const { serviceCategory } = req.params;

    try {
        const workers = await Worker.find({ services: serviceCategory }).exec();
        res.json(workers);
    } catch (error) {
        console.error('Error fetching workers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
