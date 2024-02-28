/**
    Constantes
¿Cuál es la diferencia entre una variable y una constante?
La diferencia entre una variable y una constante es que una variable como 
Let nombre = ‘miguel’; 
Console.log(nombre);
En la consola del navegador mostrara a miguel como valor de esta variable 
Puede cambiar su valor en cualquier momento durante la ejecución del código. 
Nombre = ‘yazmin’; 
Console.log(nombre);
En la consola del navegador mostrara a yazmincomo valor de esta variable ya que le cambiamos el valor de la misma. 
Mientras que con las constantes, su valor no puede cambiar en ningún momento después de su creación como. 
Const  nombre = ‘miguel’;
Console.log(nombre);
En la consola del navegador mostrara a miguel como valor de esta variable pero si queremos cambiar el valor de esta constante va a pasar esto. 
Nombre = ‘yazmin’; 
Console.log(nombre);
En la consola del navegador me debería de arrojar un error ya el los valores de las constantes no se pueden cambiar después de su creación. 

¿Cuándo usar variables y cuando usar constantes?
Como regla general, nosotros deberíamos de no cambiar el valor de las variables. 
Por lo general deberíamos usar siempre const pero hay algunas veces en las que necesitamos usar let pero en casos específicos.
En mi caso siempre trato de usar const para cuando tengo que codear un id como por ejemplo
Const nombre = document.getElementById(nombre);

 */

// Aplicando los ejemplos de diferencias entre variables y constantes. 

// Primero con variables.
let nombre = 'miguel';
nombre = 'yazmin';
console.log(nombre);

//Ahora con constantes. 
const apellido = 'salazar';
apellido = 'perez'; // Si intentamos hacer esto nos va a marcar un error en la consola del navegador. 
console.log(apellido);