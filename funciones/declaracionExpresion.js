// Declaracion de funciones: 
/*
    Para declarar una funcion hacemos esto:
    1- Usamos la palabra reservada 'funcion'.
    2- Le asignamos un nombre a dicha funcion.
    3- Seguido al nombre de la misma abrimos parentesis, dentro de los mismos vamos a indicar un argumento en caso de ser necesario.
    4- Abrimos llaves {};

    Para llamar a dicha funcion hacemos esto:
    1- nombreDeLaFuncion()
*/

// Ejemplo: 
function nombreDeLaFuncion() {
    // Aca vamos a ingluir la logica necesaria para ducha funcion
};
nombreDeLaFuncion()

function suma() {
    console.log('Sumando...!')
};
suma()

// Funciones anonimas:
/*
    Las funciones anonimas con iguales a las funciones anteriores solo que sin nombre.
    Para definir una cion anonima hacemos esto:
    1- Usamos la palabra reservada 'funcion'
    2- Abrimos parentesis()
    3- Abrimos llaves {};

    Aclaracion:
    Este tipo de funciones las podemos usar dentro del metodo .map de un array aunque no es su forma natural.
*/

// Ejemplo:
/*
    function () {
    // Logica de la funcion
};
*/

// Expresion de funciones.
/*
    Para crear una expresion de una funcion se la tenemos que asignar a una variable.
    Para ellos hacemos esto:
    1- Creamos una variable o constante de esta forma 'let o const'
    2- Nombre de la variable o constante
    3- Igualamos y definimos la funcion con la palabra reservada 'function() {};'

*/

// Ejemplo:
let resta1 = function () {
    console.log('Restando1...!')
};
const restando2 = function() {
    console.log('Restando2...!')
};

console.log(resta1, restando2)

// Expresion de funciones fecha.
/*
    Para crear una expresion de funcion fecha hacemos esto:
    1- Definimos una constante 'const'
    2- Nombramos la funcion.
    3- La igualamos, abrimos parentesis, escribimos una flecha y abrimos llaves ' = () {};' 
*/

// Ejemplo:
const dividir = () => {
    console.log('Dividiendo...!')
};

console.log(dividir)

// Aclaracion:
// Amtes de llamar a una funcion primero debemos definirla por que de otra forma nos dara error. 