/* 
    Para eliminar elementos de un array tenemos que usar estos metodos. 
    1) pop() -> Elimina el ultimo elemento del array.
    2) shift() -> Elimina el primer elemento del array.
    3) splice() -> Elimina un elemento del array en una posicion especifica.
*/

const letras = [ 'a', 'b', 'c', 'd' ]

const final = letras.pop()
const inicio = letras.shift()
const entremedio = letras.splice(1, 1)


console.log(inicio, final, letras)
