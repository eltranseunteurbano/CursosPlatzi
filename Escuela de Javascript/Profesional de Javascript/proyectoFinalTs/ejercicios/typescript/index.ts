console.log('Hello, typescript')

function add (a:number,b:number):number {
  return a + b
}

const sum = add(2,3);
console.log(sum)

function createAdder(a:number): (number) => number {
  return function (b:number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6)
console.log(fourPlus6)

function fullName (firstName: string, lastName?: string = "Burbano2"): string {
  return `${firstName} ${lastName}`
}

const jaime = fullName('Jaime', 'Burbano')
console.log(jaime)

const jaime2 = fullName('Jaime')
console.log(jaime2)