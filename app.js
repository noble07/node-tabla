const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors');

/**
 * 
 * option('l')
 * listar
 * boolean
 * default: false
 * 
 */

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.blue, 'creado'.rainbow))
  .catch(err => console.log(err))