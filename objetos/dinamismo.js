/*
    Dinamismo
¿Qué es el dinamismo en JavaScript? 
En JavaScript los objetos son dinámicos, esto quiere decir que se le pueden modificar tanto las propiedades como los valores. 

¿Cómo trabajar con un objeto dinámico?
Para empezar a trabajar con un objeto dinamico hacemos esto.
Ejemplo: 
Const user = {
	Id: 1,
{;
Vamos a agregarle una propiedad y un valor al objeto. 
User.name = ‘Miguel’;
Vamos a eliminar una propiedad y un valor al objeto. 
Delete user.name; 

Aclaraciones: 
Cuando nosotros declaramos una constante no podemos cambiarle su valor, pero si declaramos una constante en un objeto si vamos a poder agregarle, cambiarle y quitarle el valor, pero siempre seguirá siendo un objeto. 
Para evitar que el objeto sea modificado usamos elte código.
Ejemplo:
Const user1 = Object.freeze({
	Resto del código 
{);
Con esto evitamos cambiarle las propiedades y valores a un objeto. 
 Const user1 = Object.seal ({
	Resto del código 
{);
Esto no nos dejara agregar una nueva propiedad, pero si cambiarle el valor a una propiedad ya existente 

*/

// creado de forma normal.

const user1 = {
    name: "Juan",
    age: 30,
    email: "juan@gmail.com",
    actuvo: true,
    saludar: function () {
        console.log('Hola! mi nombre es: ${name} y tengo ${age}'); 
    },
};

user1.name = 'Miguel';
user1.age = 31;


user1.saludar(); 
console.log(user1); 

// Que no te pueda modificar ninguna propiedad ni valor. 

const user2 = Object.freeze({
        name: "Juan",
        age: 30,
        email: "juan@gmail.com",
        actuvo: true,
        saludar: function () {
            console.log('Hola! mi nombre es: ${name} y tengo ${age}'); 
        },
    }
)

user2.name = 'yazmin';
user2.age = 21;


user2.saludar(); 
console.log(user2); 

// Que no se modifiquen las propiedades pero que si se modifiquen los valores.

const user3 = Object.seal({
    name: "Juan",
    age: 30,
    email: "juan@gmail.com",
    actuvo: true,
    saludar: function () {
        console.log('Hola! mi nombre es: ${name} y tengo ${age}'); 
    },
}
)

user3.name = 'lu';
user3.age = 32;


user3.saludar(); 
console.log(user3); 