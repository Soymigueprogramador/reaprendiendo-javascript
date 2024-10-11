/*console.log(saludar); // Nos muestra la parabra funcion
console.log(viejo); // Nos indica que esta undefined (No definida)
// Nons indica que no se las puede llamar antes de definirlas.
console.log(hola);
console.log(chau);*/


function saludar() {};
let hola = 'Hola';
const chau = 'Chau';
var viejo = 'Ya no se usar var para definir una variable en JavaScript'; 

// Aclaraiones:
/**
 * Las funciones son definidas y llevadas al principio del archivo.
 * Las variables creadas con 'var' tambien son creadas y llevadas al principio del archivo pero sin su valor por, por lo tanto su valor es 'undefined'
 * Las variables o constantes tambien son llevadas al principio del archivo pero sin su valor ya que no pueden ser invocadas antes de ser definidas.
 */

console.log(window)