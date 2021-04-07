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

module.exports = {
  loginUser,
};
