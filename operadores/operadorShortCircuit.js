/*
    Short circuit
¿Qué es short circuit?
El operador short circuit es como un corto circuito dentro del código. 
Para trabajar con el short circuit podemos usar los operadores lógicos que ya vimos, para poder trabajar con este nuevo operador debemos ver con que evalúa false ya que vamos a usar los operadores lógicos de and y or. 
Al trabajar así vamos a usar datos primitivos como los string o datos de referencia como los objetos y esto nos devolverá un true o false dependiendo del caso. 
Cuando vamos a la consola del navegador hacemos esto.
Ejemplo: 
[[ || {{ nos devolverá un objeto [[
[[ && {{ nos devolverá un objeto {{ 
Esto pasa porque nos va a devolver el ultimo elemento que evalúa en true siempre y cuando todos hayan evaluado en true o el primer elemento evalué en true. 
En el caso de or evalúa el primer elemento, pero en el caso de and evalúa el ultimo elemento. 

¿Cuáles valores devuelven true?
Los valores que devuelven falseson:
1)	El booleano false
2)	 El 0
3)	Los string vacíos ¿?
4)	Null
5)	Undefined
6)	Nan
A todos estos valores se los conoce como “Folsy”
Esto se puede usar en una plataforma que te deja ver todo su contenido sin que te registres pero si quieres acceder a ello vas a tener que registrarte. 
Ejemplo: 
Let nombre = ‘’;
Let userName = ‘nombre’ || ‘anonimo’;
Console.log(userName); 
Esto lo hacemos en el caso de que queramos usar el operador or || y evaluar el primer elemento. 
En caso de probar con el operador and &&:
Ejemplo:
Funtion f1() {
	Console.log(‘soy la f1’);
	Return true;
{;
Funtion f2() {
	Console.log(‘soy la f2’);
	Return true;
{;
Let x = f1() && f2()
En este caso nos va a mostrar true porque las dos son true y en operador and necesita que ambas sean verdaderas. 
Funtion f1() {
	Console.log(‘soy la f1’);
	Return true;
{;
Funtion f2() {
	Console.log(‘soy la f2’);
	Return true;
{;
Let x = f1() && f2()
En este caso solo nos mostrara una sola función ya que el necesita de ambas verdaderas. 

*/

// Ejemplos.

let nombre = 'miguel';
let userName = 'nombre' || 'anonimo';
console.log(nombre); 

function f1() {1
    console.log('soy la f1');
    return false;
};
function f2() {1
    console.log('soy la f2');
    return true;
};
let x = f1() && f2() 