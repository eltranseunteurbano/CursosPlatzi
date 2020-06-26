function newFunction(name,age,country) {
  var name = name || 'jaime';
  var age = age || 21;
  var country = country || 'CO';
  console.log(name,age,country)
}

function otherFunction (name = 'jaime', age = 21, country = 'CO'){
  console.log(name,age,country)
}

newFunction()
otherFunction()