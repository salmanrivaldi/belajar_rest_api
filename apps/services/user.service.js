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
    Users.create({
      name: req.body.name,
      email: "rivaldysalman@gmai.com",
    });

    return {
      status: 200,
      message: "Berhasil menyimpan data user.",
    };

    // Cara 1
    // const name = req.body.name;
    // const email = req.body.email;
    // const address = req.body.address;
    // Cara 2 -> Destructuring object
    // const { name, email, address } = req.body;
    // return {
    //   status: 200,
    //   data: {
    //     name,
    //     email,
    //     address,
    //   },
    // };
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
