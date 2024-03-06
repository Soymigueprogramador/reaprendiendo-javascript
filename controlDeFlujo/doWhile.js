/*
    Do while
¿Cuál es la diferencia entre white y do while?
A diferencia de while que evalúa la condición que esta primero el do while evalúa la condición que esta al final. 

¿Cómo creamos un do while?
Para crear un do while que evalué la condición del final hacemos esto. 
Ejemplo:
Do {{ while (la condición a evaluar);

¿Cómo se comporta el do while?
 En while:
Se evalua la condición y si esta se cimple se va a ejecutar el código.
En do while:
Primero se ejecuta la porción de código, después se hace la evaluación y después vuelve la condición. 

*/

let i = 0;
do{
    if(i %  2 == 0) {
        console.log(`El número ${i} es par.`);
    }
    i++;
}while( i > 10);