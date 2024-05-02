/*
    Tenemos 4 formas de vaciar un array.
    La formas de vaciar un arra son:
    1) creamos un array y sus propiedades se las asignaos a un nuevo arra. (Esto no funcionara ya que el valor de primer array sigue existiendo)
    2) Creamos un array y le modificamos la longitud (Esto nos devuelve un array vacio)
    3) Creamos un array y le agregamos el metodo splice y le indicamos que queremos eliminar desde el indice 0 hasta la longitud del mismo (Esto tambien nos devolvera un array vacio)
    4) Creamos un array y usamos un loop con un while para uterrarlo pero esta es la forma menos indicada (Esto nos devolvera un array vacio)

    Aclaraciones:
    1) La forma 4 es la mas lenta y la que mas recursos consume. 
    2) La forma 3 noes la mas linda de ver pero es muy clara en demostrar lo que estamos haciendo.
    3) La forma 2 sigue sin ser la mas linda de ver pero es la mas comun. 
    4) La forma 1 es una forma regular de eliminar las propiedades de un array.

    Los metodo mas recomendable son:
    El metodo 1,2 y 3 ya que son los mas razonables para cumplir dicha funcion.
*/


// Forma 1.
let array1 = [1, 2]
array1 = []
console.log(array1)
let array1a = [1, 2]
array1 = array1a
console.log(array1, array1a) // Termina ciendo casi lo mismo. 

// Forma 2. 
let array2 = [1, 2] 
array2.length = 0
console.log(array2)

// Forma 3. 
let array3 = [1, 2]
array3.splice(0, array3.length)
console.log(array3)

// Forma 4. 
let array4 = [1, 2]
while (array4.length > 0) {
    array4.pop()
}
console.log(array4)