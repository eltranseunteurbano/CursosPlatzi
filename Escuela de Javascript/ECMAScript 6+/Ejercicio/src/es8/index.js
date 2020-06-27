const data = {
  front: 'Jaime',
  back: 'Oscar',
  degisn: 'Isa',
}

const entries = Object.entries(data);
console.log(entries)

const data = {
  front: 'Jaime',
  back: 'Oscar',
  degisn: 'Isa',
}

const values = Object.values(data);
console.log(entries)

const string = 'Jaime';
console.log(string.padStart(10, 'hola '))
console.log(string.padEnd(10,' chao'))


/* ASYNC */

const hola = () => {
  return new Promise( ( resolve, reject ) => {
    (false)
      ? setTimeout( () => resolve('hola'), 3000)
      : reject(new Error('Error'))
  })
}

const holaAsync = async () => {
  const hello = await hola();
  console.log(hello)
}

holaAsync();

const anotherFunction = async () => {

  try {
    const hello = await hola();
    console.log(hello);
  } catch (error) {
    console.log(error)
  }
}

anotherFunction();