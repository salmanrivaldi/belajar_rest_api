const bcrypt = require("bcryptjs");
const db = require("../../db/models/index");

const Users = db.users; // Model User

exports.getUsers = async () => {
  try {
    const data = await Users.findAll();
    return {
      status: 200,
      data,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Gagal mengambil data user",
      error: error.message,
    };
  }
};

exports.getUser = async (useId) => {
  try {
    const data = await Users.findOne({
      where: {
        id: useId,
      },
    });

    return {
      status: 200,
      data,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Gagal mengambil data user",
      error: error.message,
    };
  }
};

exports.createUser = async (req) => {
  try {
    const { name, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    Users.create({
      name,
      email,
      password: hashedPassword,
    });

    return {
      status: 200,
      message: "Berhasil menyimpan data user.",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Gagal menyimpan data user",
      error: error.message,
    };
  }
};

exports.updateUser = async (req, userId) => {
  try {
    Users.update(
      {
        name: req.body.name,
        email: req.body.email,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return {
      status: 200,
      message: "Berhasil mengupdate data user.",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Gagal menyimpan data user",
      error: error.message,
    };
  }
};

exports.deleteUser = async (req, userId) => {
  try {
    Users.destroy({
      where: {
        id: userId,
      },
    });

    return {
      status: 200,
      message: "Berhasil menyimpan menghapus user.",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Gagal menyimpan data user",
      error: error.message,
    };
  }
};
