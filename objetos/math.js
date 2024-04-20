/*
    Math
¿Qué es el objeto math en JavaScript?
El objeto math. Sirve para iterar los objetos.

¿Cómo se usa el objeto math?
Para usar el objeto math y poder iterar los objetos tenemos que usar la palabra reservada math. Y la propiedad que necesitemos usar.
Ejemplo:
Math.nombreDePropiedad

*/

console.log(Math.PI); // Devuelve el numero PI.
console.log(Math.abs(-15)); // Devuelve el numero absoluto.
console.log(Math.round(20.5)); // Devuelve el numero entero.
console.log(Math.floor(20.5)); // Devuelve el numero redondeado hacia abajo. 
console.log(Math.ceil(30.2)); // Devuelve el numero redondeado hacia arriba. 
console.log(Math.pow(2, 3)); // Devuelve la potencia de un numero.
console.log(Math.sqrt(9)); // Devuelve la raiz cuadrada de un numero.
console.log(Math.random()); // Devuelve un numero no aleatorio y sirve para crear numeros random. 

//Funcion para obtener el numero minimo y el numero maximo. 
function numeroMinimoNumeroMaximo(max, min) {
    return Math.random() * (max - min) + min;
};
console.log(numeroMinimoNumeroMaximo(10, 1));
// Esto nos devuelve un numero random entre 0 y 1. 