const express = require('express')
const router = express.Router();
const Query = require('../models/Query');

// Route to get all user queries
router.get('/queries', async (req, res) => {
    try {
        const queries = await Query.find();
        res.json(queries);
    } catch (error) {
        console.error('Error fetching user queries:', error);
        res.status(500).send('Server error');
    }
});

// Route to delete a user query
router.delete('/queries/:id', async (req, res) => {
    try {
        await Query.findByIdAndDelete(req.params.id);
        res.send('Query deleted successfully');
        console.log('Query deleted successfully');
    } catch (error) {
        console.error('Error deleting query:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
