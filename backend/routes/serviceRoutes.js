const express = require('express');
const router = express.Router();

// Mock data for services
const services = [
    'Air Conditioner Repair', 'Refrigerator Repair', 'Washing Machine Repair', 'Geyser Repair', 'Microwave Repair',
    'Plumbing Services', 'Electrical Services', 'Cleaning Services', 'Renovation Services', 'Garden Maintenance',
    'Appliance Installation', 'Solar Panel Installation', 'Furniture Assembly', 'Security System Installation', 'Smart Home Setup',
    'Car Repair', 'Bike Repair'
];

// Route to get service suggestions based on query
router.get('/suggestions', (req, res) => {
    const query = req.query.query.toLowerCase();
    const suggestions = services.filter(service => service.toLowerCase().includes(query));
    res.json(suggestions);
});

module.exports = router;
