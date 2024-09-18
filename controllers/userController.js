import User from '../models/user.js';

// Register new user
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login user (this is a placeholder; you should implement proper authentication)
export const login = (req, res) => {
  res.status(200).json({ message: 'Login successful' });
};
