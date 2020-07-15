const { exec, spawn } = require('child_process');

exec('node modulos/consola.js', (error, standarOut, standarError) => {
  if(error) {
    console.error(error);
    return false;
  }

  //console.table(standarOut)
});

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid, proceso.connected)

proceso.stdout.on('data', function(dato){
  console.log(dato.toString())
})

proceso.on('exit', () => console.log('El proceso terminó:', proceso.killed))