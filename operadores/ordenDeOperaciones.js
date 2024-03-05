/*
    Orden de operaciones
¿Cómo es el orden de las operaciones en JavaScript?
El orden en el que se van a ejecutar los operadores matemáticos, operadores lógicos o todos los operadores debemos entender que tienen su propio orden de ejecución, En caso de que necesitemos cambiar el orden de vamos a necesitar especificarlo ejecución encerrando dicha operación entre paréntesis (). 
Ejemplos: 
1)	En este ejemplo tenemos una fórmula matemática.
Let resultado = 8/2(2+2); 
Console.log(resultado);
En este caso nos va a dar un error ya que 2 no es una función. 
2)	En este ejemplo tenemos una fórmula matemática.
Let resultado = 8/2*(2+2); 
Console.log(resultado);
En este caso si cambiamos el orden de ejecución nos dará un 1
3)	En este ejemplo tenemos una fórmula matemática.
Let resultado = 8/(2(2+2)); 
Console.log(resultado);
En este caso si cambiamos el orden de ejecución nos dará un 1

*/

let resultado = 8/(2*(2+2));
console.log('El resultado es:', resultado);