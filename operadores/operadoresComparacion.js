/*
    Operadores de comparación
¿para que se usan los operadores de comparación?
Los operadores de comparación se utilizan para comparar distintas variables entre ellas o para comparar una variable contra otro tipo de código. 

Operadores relacionales:
Operador de comparación > mayor a
Ejemplo: 
Let a = 10;
Console.log(a > 10);
Cuando vamos a la consola del navegador este nos mostrara un resultado true.
Let a = 10;
Console.log(a > 10);
Cuando vamos a la consola del navegador este nos mostrara un resultado false.
Operador de comparación >= mayor o igual a
Ejemplo: 
Let a = 10;
Console.log(a >= 10);
Operador de comparación <= mayor o igual a
Ejemplo: 
Let a = 10;
Console.log(a <= 10);
Operador de comparación < mayor o igual a
Ejemplo: 
Let a = 10;
Console.log(a < 10);
Esto se debe a que los operadores relacionales nos devolverá un resultado del tipo booleano.  


Operadores de igualdad:
Los operadores de igualdad sirven para preguntar si el valor de una variables es igual a…
Let b = 10;
Console.log(b == 10); esto nos dará un true ya que el valor es igual a 10.
Console.log(b ¡= 10); esto nos dara un true ya que el valor no es diferente a 10.
Console.log(b == ‘10’); esto nos dará un true ya que el valor es igual a 10, esto se debe a que el operador de igualdad de “==” solo va a preguntar si el valor es igual a… y no si el tipo de dato es igual a…
Console.log(b === ‘10’); esto nos dará un folse ya que el operador de igualdad de “===” va a preguntar si es igual a… y si el tipo de dato es igual a…
Console.log(b ¡== ‘10’); esto nos dará un true ya que el operador de igualdad de “!==” va a preguntar si el tipo de dato es igual a… y si el valor de esa variables es igual a…

*/

// operadores relacionales
let a = 10; 
console.log(a < 20); 
console.log(a <= 20);
console.log(a > 20);
console.log(a >= 20);

// operadores de igualdad.
let b = 10;
console.log(b == 10);
console.log(b != 10);
console.log(b === '10');
console.log(b !== '10');