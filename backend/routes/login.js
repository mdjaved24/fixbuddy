const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Worker = require('../models/Worker');
const router = express.Router();

router.post('/logIn', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;
    if (role === 'user') {
      user = await User.findOne({ email });
    } else if (role === 'worker') {
      user = await Worker.findOne({ email });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
