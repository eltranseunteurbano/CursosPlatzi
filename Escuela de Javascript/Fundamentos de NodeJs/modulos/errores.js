function  seRompe() {
  return 3 + z
}

function seRompeAsincrona(cb) {
  setTimeout(function(){
    try {
      return 3 + z;
    } catch (error) {
      cb(error.message)
    }
  });
}

try {
  seRompeAsincrona(console.log);
  console.log('Siguió funcionando')
} catch (error) {
  console.error('se rompió', error.message)
}
