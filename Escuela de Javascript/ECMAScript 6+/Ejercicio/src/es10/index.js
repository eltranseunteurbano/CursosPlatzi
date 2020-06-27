let array = [1,2,3, [1,2,3,[1,2,3]]]

console.log(array.flat(2))

let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value*2]))

let hola = '              hello world';
console.log(hola)
console.log(hola.trimStart())

let hola = 'hello world              ';
console.log(hola)
console.log(hola.trimEnd())