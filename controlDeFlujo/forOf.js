/*
    Fot of
¿para qué sirve el fro of?
Este loops es muy parecido al for pero nos permite iterar los elementos que están dentro de un array. 
Ejemplo:
Let nombre del array = [valores del array;
Para iterar el array hacemos esto.
For(let nombramos una variable of nombre del array) {
	Aca adentro vamos a indicar lo que queremos iterar.
{;
Esta seria la mejor forma de iterar un array con el loops de of of. 

¿Cómo iterar un array con while?
Para iterar un array con while hacemos esto.
Ejemplo: 
Let i = 0;
while(i < números.length) {
	console.log(números[i[);
	i++;
{;

*/

// Iterando un array de numeros con for of.
let numeros = [1, 2, 3, 4, 5];
for (let numeracion of numeros) {
    console.log(numeracion);
};

// Iterando un array con while.
let i = 0;
while(i < numeros.length) {
    console .log(numeros[i]);
    i++;
};