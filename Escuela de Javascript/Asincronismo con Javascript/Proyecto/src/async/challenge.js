const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async ( API ) => {
  try {
    const data = await fetchData(API);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count)
    console.log(character.name)
    console.log(origin.dimension)

  } catch {
    console.log(error)
  }
}

console.log('Antes 1');
anotherFunction(API);
console.log('Después 1')