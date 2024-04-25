// Agregando ID.

let objeto = { name: 'Celeste' }

function agregarId(objeto) {
  if( typeof objeto === 'object' ) {
    objeto.id = Math.random()
    objeto.edad = 24
    objeto.estadoCivil = 'Soltera'
    // De la misma forma que se le agrego el ID tambien se le agregaron mas propiedades y valores al objeto.
  } 
  return objeto; 
}

agregarId(objeto)
console.log(objeto)