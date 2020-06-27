const obj = {
  name: 'Jaime',
  age: 22,
  country: 'CO',
};

let {name, ...all} = obj;
console.log(name, all)