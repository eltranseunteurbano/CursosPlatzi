function hola(nombre, miCallback) {
  console.log('Hola, soy una función asíncrona');
  setTimeout(function() {
    console.log('Hola, ' + nombre)
    miCallback(nombre);
  },1000);
}

function hablar(callbackHablar){
  setTimeout(function() {
    console.log('bla bla bla...');
    callbackHablar()
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function(){
    console.log('Adiós ' + nombre);
    otroCallback();
  },1000)
}
/*
console.log('Iniciando proceso');
hola( 'Jaime', function(nombre) {
  hablar(function(){
    hablar(function(){
      hablar(function(){
        adios(nombre, function(){
          console.log('Terminando proceso');
        });
      });
    });
  })
});*/

function conversacion(nombre, veces,callback){
  if(veces >= 0) {
    hablar(function(){
      conversacion(nombre,--veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}

console.log('Iniciando proceso');
hola('Jaime', function(nombre){
  conversacion(nombre, 300, function(){
    console.log('Proceso terminado')
  });
})
console.log('Terminando proceso');
