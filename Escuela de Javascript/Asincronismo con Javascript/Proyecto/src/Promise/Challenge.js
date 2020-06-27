const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

/*fetchData(API)
  .then( data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[1].id}`)
  })
  .then(data => {
    console.log(data.name)
    return(fetchData(data.origin.url))
  })
  .then(data => {
    console.log(data.dimension)
  })
  .catch(error => {
    console.error(error)
  })*/

fetchData(API)
.then ( data => {
  return console.log(data)
})
.catch(error => {
  console.log(error)
})