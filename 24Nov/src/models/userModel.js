const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    minlenghth: [5, "El nombre debe tener al menos 5 caracteres"],
    maxlength: [50, "El nombre no puede exceder los 50 caracteres"],
  },
  lastName: {
    type: String,
    required: [true, "El apellido es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: [true, "El email ya está en uso"],
    trim: true,
  },
  package: {
    type: String,
    required: [true, "El paquete es obligatorio"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const userModel = mongoose.model("User", userSchema, "users");
// const productModel = mongoose.model('Product', new Schema());

module.exports = userModel;
