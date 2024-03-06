/*
    While
¿Qué son los loops en JavaScript?
Algunas veces vamos a necesitar que una porción de código se ejecute varias veces, cuando esto ocurre es cuando vamos a tener que usar los loops en JavaScript. 

¿Cuántos tipos de loops existen en JavaScript?
En JavaScript tenemos 5 tipos de loops, estos son: 
1)	While 
2)	Do while 
3)	For 
4)	For in 
5)	For ot
Estos loops cumplen con la misma tarea de ejecutar la misma porción de código varias veces,    aun así estos loops van a tener sus diferencias. 

Ejercicio:
Vamos a imprimir en la consola los números pares usando el loops while. 
Let i = 0;
While(condición a cumplir) {
	Si la condición se cumple vamos a ejecutar el código que estaría aca a dentro	
{;

*/

// Ejersicio.
let i = 0;
while (i < 10) {
    if(i %  2 == 0) {
        console.log(`El número ${i} es par.`);
    }
    i++;
};
console.log('Logramos mostrar los numeros par');
