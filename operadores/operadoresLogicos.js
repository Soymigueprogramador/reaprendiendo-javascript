/*
    Operadores lógicos
¿Qué son los operadores lógicos?
En JavaScript tenemos tres tipos de operadores logicos como:
1)	And 
2)	Or
3)	Not

Operador lógico and = &:
Este operador lógico se utiliza para evaluar si el valor de su derecha y el valor de su izquierda son iguales, esto se podría usar para una validación de usuario y contraseña en una pagina de login ya que necesita evaluar si los valores de la contraseña y los valores del password son iguales a los registrados ya que de ser iguales dará un true y si son diferentes dará un false. 
Ejemplo:
Console.log(true && true); dará un resultado de valor true. 
Console.log(true &&false); dará un resultado de valor false. 
Casos de uso del operador and:
Let suscripto = true;
Let mayor = true; 
Console.log(suscripto && true); 
Y esto lo vamos a tener que completar con un condicional. 

Operador lógico or = ||:
El operador lógico or solo evalua si una condición se cumple devolverá un true.
Ejemplo:
Console.log(true || false); nos devolverá un true ya que sono necesita una condición exitosa para devolver un true. 
Esto se podría usa cuando al entrar a un sitio web nos pide que ingresemos un email y una contraseña pero necesita que solo uno de esos datos este registrado y si lo esta nos dejara pasar. 



Operador lógico not = ¡;
El operador lógico not lo que hace es invertir el valor de una variable.
Ejemplo: 
Let mayor = true;
Console.log(¡mayor); 
Esto se puede usar cuando quedes mostrar el catalogo de promociones exclusivas para nuevos usuarios en una plataforma digital. 

*/

// Operador and = &&
console.log(true && true);
console.log(true && false);

// Operador or = ||
console.log(false || true);

// Operador not = !
let mayor = true;
console.log(!mayor);