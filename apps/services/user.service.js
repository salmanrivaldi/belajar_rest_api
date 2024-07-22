const db = require("../../db/models/index");

const Users = db.users; // Model User

exports.getUsers = async () => {
  try {
    return {
      status: 200,
      data: {
        name: "Salman Rivaldi",
        email: "rivaldysalman@gmail.com",
        address: "Jalan Tandi, Ateuk Jawo",
      },
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
