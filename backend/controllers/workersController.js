// controllers/workersController.js
const Worker = require('../models/Worker');

exports.getWorkersByService = async (req, res) => {
    const { serviceCategory } = req.params;
  
    try {
        const workers = await Worker.find({ services: serviceCategory }).exec();
        res.json(workers);
    } catch (error) {
        console.error('Error fetching workers:', error);
        res.status(500).json({ error: 'Internal server error' });
    };
};
