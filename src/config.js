// config.js
const dotenv = require('dotenv').config();

module.exports = {
  NOMBRE: process.env.NOMBRE,
  DNI: process.env.DNI,
  CONTRASENIA: process.env.CONTRASENIA,
  NOMBRE_PRODUCTO: process.env.NOMBRE_PRODUCTO
}