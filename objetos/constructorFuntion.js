/*
    Constructor function
¿Cómo se usa?
Funtion NombreDeLaFuncion() {
	Resto del codigo
{;
Let nombreDeLaVariable = NombreDeLaFuncion();
Console.log(nombreDeLaVariable);

¿Qué pasa en JavaScript cuando usamos new?
New es una palabra reservada, cuando la usamos pasan estas 4 cosas
1)	Se crea un objeto literal del aire.
2)	Se vincula el prototipo de la función con el objeto que se aca de crear. 
3)	Se le asigna la palabra reservada this al objeto que se acaba de crear.
4)	Si esta función no retorna nada, entonces va a retornar un this. 

Aclaración: 
1)	Al usar una función constructora debemos usar upper camel case, es decir que la primera letra va hacer una mayúscula. 
2)	Cuando tenemos una propiedad en JavaScript a le agregamos una función ya sea con una función constructorao una factory función a estas les dejamos de llamar funciones y las llamamos métodos. 
3)	Un método es una función que fue asignada a una propiedad de un objeto. 

*/

function Usuarios() {
    this.id = 1;
    this.recuperarEmail = function() {
        console.log('Recuperar email');
    }
};
let user = new Usuarios();
console.log(user);