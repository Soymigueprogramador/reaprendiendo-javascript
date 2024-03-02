/*
    Argumentos y parametros
¿Qué con los argumentos y parámetros en JavaScript?
Los argumentos y funciones son los parámetros que se indican dentro de los paréntesis y son funciones que se van a usar más adelante.
Ejemplos:
Funtion sumar(a) {
	Eturn a + 2;
{;
Sumar(5);
esto nos permite reutilizar el código y hacerlo más eficientes. 

Aclaraciones:
1)	Cuando llamamos a una función y le pasamos un valor “sumar(5)” a esto se lo conoce como argumentos. 
2)	Cuando referenciamos a los valores dentro de una función a esto se lo conoce como parámetros.
3)	Las funciones pueden recibir gran cantidad de argumentos y de parámetros. 
Si le queremos agregar mas argumentos y después acceder a todo ellos hacemos esto.
Ejemplo: 
funtion sumar(a, b) {
	Console.log(arguments);
Return a + b;
{;
Let resultado = Sumer(5, 6, 1, 2, 3);
Console.log(resultado);
ESTO NO ES LA MEJOR MANERA DE ACCEDER A LOS ARGUMENTOS REFERENCIADOS. 

*/

// Ejemplos.
function sumar(a, b) {
    return a + b;
};
let resultado = sumar(11, 21);
console.log('El resultado es:', resultado);
console.log(typeof sumar);

function AUMENTAR(a, b) {
    console.log(arguments); 
    return a + b
}
let MOSTRAR = AUMENTAR(3,4,5,8,1);
console.log(resultado);