const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
  login: { type: String, required: true, unique: true},
  nombre: { type: String, required: true },
  fecha_nacimiento: { type: String, required: true },
  contrasena: { type: String, required: true}
})

let UserModel = mongoose.model('usuario', UserSchema)

module.exports = UserModel
