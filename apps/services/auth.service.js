const db = require("../../db/models/index");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utilities/auth");

const User = db.users;

exports.signin = async (req) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user === null) {
      return {
        status: 404,
        message: `Email ${email} tidak ditemukan.`,
      };
    }

    const isMatchingPassword = await bcrypt.compare(password, user.password);
    if (!isMatchingPassword) {
      return {
        status: 401,
        message: "Password tidak sesuai",
      };
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = generateToken(payload);

    return {
      status: 200,
      message: "Berhasil membuat token.",
      data: { token },
    };
  } catch (error) {
    return {
      status: 500,
      message: "Login gagal!",
      error: error.message,
    };
  }
};
