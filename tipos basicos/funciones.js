/*
    Functions
¿Que son las functions en JavaScript?
las functions en JavaScript son bloques de Código fundamentals dentro de la creacion de proyectos en JavaScript, estas se van a usar todo el tiempo dentro de este lenguaje y pueden ser panadas Como prosedimientos o como un listado de instrucciones que deben ejecutar. 
Para crear una function hacemos esto.
Ejemplo: 
Function nombre de la function()  {
	Dentro de la function se va a escrinit el codigo que esta va a ejecutar
{;
nombre de la function();
los pasos para crear una function son:
1)	Palabra reservada function
2)	Nombre de la function seguida de parentesis y llaves
3)	Dentro de la function escribimos las instrucciones de la misma
4)	Fuera del bloque de codigo de la function vamos a llamarla usando el nombre de la function y los parentesis.
Ejemplo de una function: 
Function saludar() {
	Console.log(‘hola a todos’); 
{; 
saludar();

*/

// Ejemplos basicos de funciones
function saludar() {
    console.log('Hola a todos');
};
saludar(); 

function sumar(a, b) {
    return a + b;
};
let resultado  = sumar();
console.log(sumar(200, 30)); 

function calculoGeneral(a, b, c) {
    return a + b *c;
};
calculoGeneral(10, 5, 4);
let resultados = calculoGeneral(10, 5, 4);
console.log(calculoGeneral(10, 5, 4))