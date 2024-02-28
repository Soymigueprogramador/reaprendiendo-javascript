/*
    Tipos de datos
Debemos saber que:
En JavaScript tenemos 2 tipos de datos, los primitivos y los de referencias.

Datos primitivos: 
Los tipos de datos primitivos son: 
1)	String 
2)	Number
3)	Undefines 
4)	Booleans 
5)	Null

Datos de referencias: 
Los tipos de datos de referencias son: 
1)	Arrays
2)	Object
3)	Funtions
4)	Class

¿Por qué se les llama tipos de datos primitivos y tipos de datos de referencia?
La razón es porque: 
1)	Datos primitivos: 
El sistema operativo que estemos usando va a dividir la memoria RAM en secciones y se le va a asignar una sección a cada variable, el tamaño de estas secciones no puede cambiar con el tiempo. A esto se lo conoce como “stack” y es en este lugar donde se va a guardar los datos primitivos.
2)	Datos de referencia: 
Los datos de referencia se van a guardar dentro de una sección de la memoria RAM conocida como “heap”, esta es un tipo de memoria dinámica y por ende suele ser mas lenta, pero a diferencia de la memoria stack esta si puede cambiar su tamaño ya que es dinámica. 




Aclaraciones: 
1)	Los datos primitivos se guardar en la memoria y cuado yo quiera ir a buscarlos voy a obtener el valor de ese dato.
2)	Los datos de referencia son auqellos datos que se guardan en la memoria pero cuando yo los quiero ir a buscar lo que voy a tenerminar encontrando es una referencia del espacio de memoria en el que están guardados, es como si fue un juega donde hay que buscar un objeto mediante pistas. 

*/