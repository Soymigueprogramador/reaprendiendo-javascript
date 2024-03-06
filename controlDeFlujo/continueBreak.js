/*
    Continue y break
¿Cuándo se debe usar el loops de continue y break?
Cuando estamos usando los loops de while, do while, for, foro f o for in y ya no necesitamos seguir iterando nada más, entonces usamos este loops. 
En este caso vamos a usarlo con el while pero se puede usar con cualquiera de los loops que ya vimos. 
Ejemplo: 
Let i = 0;
While(i < 6) {
	I++;
	If (i === 2) {
		Continue;
{
If (i === 6) {
	Break;
{	
Console.log(i);
{;

¿Qué está pasando?
1)	En la primera ejecución tenemos a se salto el numero indicado ya que el continue vuelve al principio y el valor indicado no lo muestra.
2)	Cuando se llego al valor indicado este corta la iteración y no sigue imprimiendo

*/

let i = 0;
while(i < 10) {
    i++;
    if (i === 5) {
        continue;
    }
    if (i === 10) {
        break;
    }
    console.log(i); 
};