/*
    O0perador bitwise
Definiciones: 
¿Qué es un bit?
Un bit es un digito en binario, es decir que solo puede tomar el valor de 0 o el valor de 1. 
¿Qué es un byte?
Un byte es la combinación de 8bit, en un byte se puede almacenar 
1)	Caracteres
2)	Números
3)	Símbolos
4)	Valores matemáticos
Esto se ve representado con 00000000 => 0 o si quisiera almacenar un 1 se representaría así 11111111 => 1
1)	Si yo quiero un 0 = 00000000 => 0
2)	Si yo quiero un 1 = 11111111 => 1
3)	Si yo quiero un 2 = 00000010 => 2
4)	Si yo quiero un 1 = 00000011 => 3
5)	Si yo quiero un 1 = 00000100 => 4
6)	Si yo quiero un 1 = 00000101 => 5
7)	Si yo quiero un 1 = 00000110 => 6
Esto que estamos haciendo es escribir los minutos en código binario.
Existe una forma de convertir los números de base binaria a base decimal, y se llama decimal porque es de 10 números.
Base decimal:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9 
estos son los 10 caracteres con los que podemos representar números.
Base binaria: 
0, 1 
en la base binaria solo se manejan estos números. 
el operador bitwase va a utilizar la base binaria para funcionar.




¿Cómo funciona el código binario?
En el operador bitwise también podemos usar los operadores lógicos de and && y or || 
Operador bitwise con el operador or.
Ejemplos:
Console.log(1 || 3);
Console.log(1 || 4);
Console.log(3 || 5);
Si queremos tener un 1 = 00000001 => 1
Si queremos tener un 3 = 00000011 => 3 
El operador bitwise va a tomar toda la cadena de caracteres binarios y va a devolver 1 siempre y cuando el 1 o el 3 tenga un 1 entre sus caracteres. 
Operador bitwise con el operador and.
Ejemplo: 
Console.log(1 && 3);
Console.log(1 && 4);
Console.log(3 && 5);
Tal y como lo vimos antes el operador and necesita que ambas condiciones se cumplan a la vez, es decir que necesita que ambos valores tengan un 1 en su cadena. 

*/

// Operador bitwise con or
console.log(1 || 3);
console.log(1 || 4);
console.log(3 || 5);
// Operador bitwise con and
console.log(1 && 3);
console.log(1 && 4);
console.log(3 && 5);