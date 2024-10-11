function alcance() {
    function saludar() {};
    var viejo = 'Ya no usar';
    let variable = 'Hola mundo';
    const constante = 'Hola mundo';
 
    console.log(saludar);
    console.log(viejo);
    console.log(variable);
    console.log(constante);
};
alcance()

// Aclaraciones:
/**
 * Si creamos variables o constantes dentro de una funcion estas tiene su alcance dentro de la misma,
    es decir que si las llamamos desde afuera nos devolvera un error.
 * Si creamos una variable o constante fuera de una funcion la podremos llamar desde cualquier lugar.
 */