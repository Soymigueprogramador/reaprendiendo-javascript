/* 
    Para hacer una busqueda en un array usamos este metodo.
    A los valores los podemos buscar de 2 formas.
    1) por referencia.
    2) por primitivos.
    para buscarlos de esas formas hacemos esto: 
    1) .indexOf(valor)
    2) .includes(valor) (Este nos va a devolver el indice del elemento siempre que el mismo este dentro de l array, de lo contrario nos dara un elemento con numero negativo)
    2) .lastIndexOf() (Esto inicia la busqueda desde el final hazta el comienzo del array)
    3) .uncludes() (Esto nos devolvera un true si el elemento esta dentro del array, si el elemento no esta dentro del array nos devolvera un false)

*/

const letras = [ 'A', 1, 'B', 'C', 'D', 1 ]

console.log(letras.indexOf(1, 3))
let buscar = letras.indexOf(1)
const buscarFinal = letras.lastIndexOf(3)
const siOnO = letras.includes('D')

console.log(buscarFinal)
console.log(letras)
console.log(buscar, buscarFinal)
console.log(siOnO)

//console.log(letras.indexOf(1)) //En caso de que nuestro array tenga 2 elementos iguales y apliquemos este metodo para guscarlo debemos tener en cuenta que solo nos devolvera el primer elemento que encuentre con dicho nombre.
