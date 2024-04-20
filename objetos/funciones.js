/*
    Funciones
¿Qué son las funciones?
Las funciones en JavaScript también son objetos y se las considera como objetos de primera clase, esto quiere decir que las funciones como las funciones constructoras pueden ser asignadas a otras variables como argumentos de otras funciones y también retornadas como de otras funciones y además estas también tienen propiedades. 
Ejemplo: 
Funtion nombre de la función(argumento) {
	Resto del codigo
{;
Console.log(nombre de la función.name);
Esto nos devolverá el nombre de la función. 
Console.log(nombre de la función.length);
Esto nos indicara la cantidad de argumentos que recibe esta función 

¿Cómo asignar una función a una variable?
En caso de que tengamos que asignarle una función a una variable hacemos esto.
Ejemplo: 
Const nombre de la variable = nombre de la función();
En referencia a esta variable creamos un usuario.
Let nombre de la variable = new nombre de la variable a referencias(‘valor de la misma’);
Console.log(nombre de la variable);  








¿Cómo pasar funciones como argumentos?
Para pasar una función como argumento hacemos esto.
Ejemplo: 
Funtion nombre de la función(argumento de fn, 2do argumento) {
	Return new función argumento(2do argumento);
{;
Esta función recibe una función de argumento como una función constructora y otro argumento.
Let nombre de la variable = nombre de la función(nombre de la función constructora, ‘valor’);
Console.log(nombre de la variable);

¿Cómo retornar una función dentro de otra función?
Para retornar una funcion dentro de otra funcion hacemos esto.
Ejemplo: 
funtion nombre de la funcion() {
	return funtion() {
		resto del código; 
{;
{;
Let nombre de la variable = nombre de la funcion que esta dentro de la primer funcion();
Nombre de la primer funcion(); 

*/

// Funcion de Usuario.
function Usuario(nombre) {
    this.nombre = nombre;
};
console.log(Usuario.name);
console.log(Usuario.length);

// Asignando una funcion a una variable. 
const u = Usuario
let user = new u('Miguel');
console.log(user); 

//Pasando funciones como argumentos.
function of(fn, arg) {
    return new fn(arg);
};
let user1 = of(Usuario, 'Celeste');
console.log(user1);

//Retornando una funcion dentro de otra funcion. 

function f1() {
    return function() {
        console.log('Aguante boca!!!'); 
    };
};
let gritar = f1();
gritar();