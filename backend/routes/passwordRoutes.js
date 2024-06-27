// routes/passwordRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Route to get security question
router.post('/getSecurityQuestion', async (req, res) => {
    const { email, role } = req.body;
    try {
        const user = role === 'user' ? await User.findOne({ email }) : await Worker.findOne({ email });
        if (!user) return res.status(404).send('User not found');
        res.json({ securityQuestion: user.securityQuestion });
    } catch (error) {
        console.error('Error fetching security question:', error);
        res.status(500).send('Server error');
    }
});

// Route to verify security answer
router.post('/verifySecurityAnswer', async (req, res) => {
    const { email, role, securityAnswer } = req.body;
    try {
        const user = role === 'user' ? await User.findOne({ email }) : await Worker.findOne({ email });
        if (!user) return res.status(404).send('User not found');
        if (user.securityAnswer !== securityAnswer) return res.status(401).send('Incorrect security answer');
        res.send('Security answer verified');
    } catch (error) {
        console.error('Error verifying security answer:', error);
        res.status(500).send('Server error');
    }
});

// Route to verify security answer and redirect to reset password
router.post('/verifySecurityAnswer', async (req, res) => {
    const { email, role, securityAnswer } = req.body;

    try {
        let user;
        if (role === 'user') {
            user = await User.findOne({ email });
        } else if (role === 'worker') {
            user = await Worker.findOne({ email });
        }

        if (!user) {
            return res.status(404).send('User not found');
        }

        if (user.securityAnswer === securityAnswer) {
            res.json({ success: true });
        } else {
            res.status(400).send('Incorrect security answer');
        }
    } catch (error) {
        console.error('Error verifying security answer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Route to handle password reset
router.post('/resetPassword', async (req, res) => {
    const { email, role, newPassword } = req.body;
  
    try {
      let user;
  
      if (role === 'worker') {
        user = await Worker.findOne({ email });
      } else if (role === 'user') {
        user = await User.findOne({ email });
      }
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
  
      // Update the user's password
      user.password = hashedPassword;
      await user.save();
  
      res.send('Password reset successfully');
      console.log('Password reset successfully');
      
    } catch (err) {
      console.error('Error resetting password:', err);
      res.status(500).send('Server error');
    }
  });

module.exports = router;
