/*
    Factory functions
¿Para qué se usan las factory functions?
Las factory functions nos permite crear objetos de una forma simple sin ser repetitivas. 

¿Cómo se utilizan las factory functions en JavaScript?
Antes teníamos que copiar y pegar el mismo objeto y cambiarle algunas cosas a mano, pero ahora como las factory functions hacemos esto para que se no sea repetitivo. 
Ejemplo: 
Funtion nombre de la función() {
	Resto del código.
{;
Let usuario1 = nombre de la función(valores del objeto); 
Console.log(cantidad de usuarios); 

Aclaraciones:
1)	Este tipo de funciones necesitas usar camel case, es decir que la primera letra de la primera palabra se debe dejar en minúscula y desde la segunda palabra se deberá escribir la primera letra en mayúscula. 
holaMundo().
2)	Por convención se debe escribir estas funciones con nombres relacionados a lo que se esta creando. 
crearUsuario() o createUser()
*/

function crearUsuario(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad, 
        activo: true,
        recuperarMiEmail: function() {
            console.log('Recupere mi email'); 
        },
    }
};

const usuario1 = crearUsuario('Miguel', 32);
const usuario2 = crearUsuario('Maia', 23);
const usuario3 = crearUsuario('Yazmin', 21);
const usuario4 = crearUsuario('Celeste', 24);

console.log(usuario1, usuario2, usuario3, usuario4);