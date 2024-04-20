/**
    Introducción a objetos
¿Qué son los objetos em JavaScript?
Los objetos nos permiten agrupar datos y asi poder trabajar con ellos de una forma mas cómoda. 

¿Cómo crear objetos?
Para crear un objeto podemos usar tano let como const. 
Ejemplo:
Let nombre del objeto = {
	Propiedades y valores del objeto.
{;
También vamos a poder colocar objetos dentro de un objeto de esta manera.
Ejemlo: 
Let nombre del objeto = {
	Propiedades y valores del objeto.
	Propiedad del otro objeto que vamos a poner dentro del primer objeto {
	Sus propiedades y valores.
{
También podemos agregarle propiedades con valores booleanos. 
También se le puede agregar funciones dentro del objeto. 
{;

Aclaraciones:
1)	Si ponemos un objeto dentro de otro objeto, el punto y coma ; solo debería de usarse en el objeto principal. 
2)	Como vemos que se le pueden agregar funciones dentro de los objetos estas pueden tener nombre y usar las sintaxis como siempre o también pueden ser funciones anónimas. 
3)	A este tipo de programación se la conoce como 
“Programación Orientada a Objetos” o “´POO” 

 */

let user = {
    nombre: 'Miguel', 
    apellido: 'Salazar', 
    discapacidad: {
        visual: 'Atrofia de nervio óptico', 
        motriz: 'Uso silla de ruedas'
    },
    bostero: true,
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

user.saludar();
console.log(user);
