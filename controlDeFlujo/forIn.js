/*
    For in
¿para qué sirve el loops for in?
El loops for in nos permite iterar sobre las propiedades de un objeto. 
Ejemplo:
Const nombre del objeto= {
	Propiedades del objeto
{;
For ( let nombre de la variablein nombre del objeto ) {
	Console.log((nombre de la variable);
{;
En la terminarl del navegador vamos a ver las propiedades del objeto que estamos iterando. 

Aclaraciones:
Para acceder a las propiedades de un objeto debemos usar “for in” pero si necesitamos acceder a las propiedades de un array es mejor usar “for of”. 

*/

const user = {
    id: 1,
    name: 'Miguel',
    age: 31
};
for ( let propiedad in user ) {
    console.log(`${propiedad}: ${user[propiedad]}`);
};