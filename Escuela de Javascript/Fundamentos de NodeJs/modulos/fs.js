const fs = require('fs');

function leer(ruta, callback){
  fs.readFile(ruta, (error, data) => {
    //Archivo leido
    callback(data.toString())
  })  
}

//leer(__dirname + '/archivo.txt', console.log);

function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, function(error){
    if(error){
      console.error("No he podido escribirlo", error)
    } else {
      callback(contenido);
    }
  })
}

escribir(__dirname + '/archivo1.txt', 'HOLA SOY JAIME Y ESTO ES UNA PRUEBA', console.log);

function borrar(ruta, callback) {
  fs.unlink(ruta, callback);
}

borrar(__dirname + '/archivo1.txt', console.log);Conversación