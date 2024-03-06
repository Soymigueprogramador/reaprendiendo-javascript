/*
    Switch
¿para que se usa switch?
Nos permite indicarle al código para donde debe ir vasado en el valor de una variable. 
Ejemplo: 
Let acción = ‘listar;
switch(nombre de la variable) {
	case ‘valor de la variable: 
		lógica del código
		break;
	case ‘valor de la variable: 
		lógica del código
		break;
	default;
		console.log();
{;	

Aclaraciones: 
1)	Cada vez que usemos un case vamos a tener que indicarle un break al final de ese mismo bloque de código o de lo contrario el resto del código va hacer ejecutado de una sola vez independientemente del valor de la variable indicada. 
2)	De forma opcional podemos usar un default para cuando no tengamos ninguna variable cuyo valor de aplique al código. 
3)	Se puede usar tanto switch como if else. 
4)	Hay librerías como “redux” que les gusta usar switch. 

*/

let accion = 'Actualizar';
switch(accion) {
    case 'Listar':
        console.log('Mostrando la lista de productos');
        break;
    case  'Agregar':
        console.log('Agregando un nuevo producto a la lista');
        break;
    default:
        console.log('Accion no permitida');
};