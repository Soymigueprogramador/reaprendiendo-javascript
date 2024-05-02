/* 
    Cuando creamos un objeto usando la sintaxis de un objeto literal es que estamos creando un objeto nuevo.
    Si le pasamos un objeto con las mismas propiedades y los mismos valores este nos devolvera un "-1" ya que este se guarda por referencia.

    podemos encontrarnos con casos en el que un elemento tenga el mismo valor, en ese caso:
    .find nos devolvera el primer elemento que cumpla con dicha condicion. 

    a las funcioes que van como argumento se las conoce como "predicate" y su funcion es devolver "true o false".. 

*/


const usuario = [
    { id: 1, name: 'Miguel' },
    { id: 2, name: 'Yazmin' }
];
const resultado = usuario.find(function(usuario) {
    return usuario.id === 1
})


console.log(usuario)
console.log(resultado);


// Ejemplo de chatGPT

const golosinas = [
    { id: 1, nombre: 'chocolate' },
    { id: 2, nombre: 'caramelos' },
    { id: 3, nombre: 'chicles' },
    { id: 4, nombre: 'galletas' },
    { id: 5, nombre: 'paletas' },
    { id: 6, nombre: 'malvaviscos' },
    { id: 7, nombre: 'chocolate blanco' },
    { id: 8, nombre: 'gomas de frutas' },
    { id: 9, nombre: 'bombones' },
    { id: 10, nombre: 'piruletas' },
    { id: 11, nombre: 'alfajores' },
];
const resultados = golosinas.find(function(golosina) {
    return golosina.nombre === 'chicles'
})

// Tambien podemos escribir esta funcion como una fat arrow function, lo hacemos asi.
const resultados3 = golosinas.findIndex(golosina => golosina.nombre === 'galletas')

// En caso de que no necesitemos el elemento nombre y tengamos que guscar por indice hacemos esto.
const resultados2 = golosinas.find(golosina => golosina.nombre === 'galletas')

console.log(golosinas)
console.log(resultados);
console.log(resultados3)
console.log(resultados2)