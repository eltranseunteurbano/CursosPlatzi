const doSomethingAync = () => {
  return new Promise ( ( resolve, reject ) => {
    (true)
    ? setTimeout(() => resolve('Do Something Async'), 3000)
    : reject(new Error ('Test Error'))
  })
}

const doSomething = async() => {
  const something = await doSomethingAync();
  console.log(something)
}

console.log('Antes');
doSomething();
console.log('Después')

const anotherFunction = async () => {
  try {
    const somenthing = await doSomething();
  } catch {
    console.log(error)
  }
}

console.log('Antes 1');
anotherFunction();
console.log('Después 1')