const fs = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

  try {

    let salida = ''

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base*i}\n`
    }

    if(listar) {
      console.log('===================='.inverse.bgMagenta)
      console.log('    Tabla del'.trap, base.toString().red)
      console.log('===================='.inverse.bgMagenta)
      console.log(salida.random)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    return `tabla-${base}.txt`
  
  } catch (err) {
    throw err
  }
}

module.exports = {
  crearArchivo
}