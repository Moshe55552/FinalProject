const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User'); // Replace with your actual path to the User model

async function handleLogin(req, res) {
  try {
    const { user, pwd } = req.body;

    if (!user || !pwd) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Find the user by username in the database
    const foundUser = await User.findOne({ username: user });

    if (!foundUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(pwd, foundUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If the password is valid, create a JSON Web Token (JWT)
    const token = jwt.sign({ userId: foundUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the JWT as a response
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { handleLogin };


