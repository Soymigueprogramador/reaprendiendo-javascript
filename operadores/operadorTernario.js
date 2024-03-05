/*
    Operador ternario
¿Cómo funciona el operador ternario en JavaScript?
Si tenemos una expresión y esta devuelve un true se le va a asgnar un valor determinado y si esta devuelve un false se le va a asignar otro valor determinado. 
Let edad = 16;
Let ingreso = edad > 18 ¿ ‘pasa’ : ‘raja de acá’;
Console.log(ingreso);
En este caso nos va a negar el acceso, pero si le cambiamos el valor de la variable edad nos va a dejar entrar. 
Esto es muy similar a los condicionales como if y else. 

*/

let edad = 21;
let ingreso = edad > 18 ? 'Pasa' : 'Raja de aca'; 
console.log(ingreso);