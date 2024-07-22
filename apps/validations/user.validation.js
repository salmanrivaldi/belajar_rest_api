const { body } = require("express-validator");
const{ validate } = require('../utilities/validator')

exports.createUser = validate([
  body('name').notEmpty().withMessage('Nama tidak boleh kosong.')
])