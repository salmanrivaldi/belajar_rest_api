const AuthServices = require("../services/auth.service");

exports.signin = async (req, res) => {
  try {
    const response = await AuthServices.signin(req);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
