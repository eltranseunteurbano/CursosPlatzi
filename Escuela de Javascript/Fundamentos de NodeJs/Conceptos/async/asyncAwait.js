async function hola(nombre) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log('Hola, ' + nombre)
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre){
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('bla bla bla...');
      resolve(nombre)
    }, 1000);
  })
}

async function adios(nombre) {
  return new Promise ( (resolve, reject) => {
    setTimeout(function(){
      console.log('Adiós ' + nombre);
      resolve();
    },1000)
  })
}

async function main() {
  await hola('Jaime');
  await hablar('Jaime');
  await adios('Jaime');
};

main();