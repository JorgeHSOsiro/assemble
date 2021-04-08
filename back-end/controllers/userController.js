const { users } = require('../models');

const loginUser = async (req, res) => {
  try {
    const { token } = req;
    const { email } = req.user;
    const data = { email, token };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password} = req.body;
    const exists = await users.findOne({ where: { email } });
    if (exists) throw new Error('Email already in database');
    const newUser = await users.create({
      name,
      email,
      password,
    });
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
