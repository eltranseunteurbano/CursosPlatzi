var tabla = [{Nombre: 'Jaime', edad: 22}, {Nombre: 'Isabella', edad: 25}]

console.log("Nos permite ver algo, cualquier cosa")
console.info("Nos permite informar algo, como por ejemplo 'Se ejecutó esto', 'Tal estado se actualizó'");
console.error("Sirve para mostrar errores")
console.warn("Sirve para mostrar un warning, donde hay un potencial error");
console.table(tabla); //Es util para mostrar datos de arreglos y cosas asi

//Agrupa console.log
console.group('Conversación')
  console.log('Hola')
  console.log('bla bla bla')
  console.log('Adiós')
console.groupEnd('Conversación')

/*
function function1(){
  console.group('función 1');
  console.log('Esto es de la función 1')
  console.log('Esto también')
  function2();
  console.groupEnd('función 1');
}

function function2(){
  console.group('función 2');
  console.log('Empezamos');
  console.log("Ahora estamos en la función 2")
  console.groupEnd('función 2');
}

function1();*/

//Esto lo que hace es ir contando las veces que pasa algo
console.count('Esto es una prueba del console.count')
console.count('Esto es una prueba del console.count')
console.count('Esto es una prueba del console.count')
console.count('Esto es una prueba del console.count')
//Esto es lo que reiniciar el conteo
console.countReset('Esto es una prueba del console.count')
console.count('Esto es una prueba del console.count')