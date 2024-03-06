/*
    Introducción if
¿Cuándo debemos usar la instrucción if?
Cuando tengamos que ejecutar una porción de código pero esta cumple con solo una condición entonces debemos usar la instrucción de “if”. 
Ejemplo:
If (condición a cumplir) {
	Aca adentro agregamos la expresión. 
{
En este caso nos muestra el mensaje del console.log pero si cambiamos el valor de la variable edad no nos va a mostrar nada. 

*/

let edad  = 18; 
if(edad >= 18) {
    console.log('Si, soy mayor de: ${edad}');
} 
console.log(edad)