const miArray = [
    'Hola',
    12,
    'a',
    {},
    { id: 9, todos: 'todos' }
];

function dividirPorTipos(miArray) {
    return {
        Numbers: miArray.filter(n => typeof n === 'number'),
        Strings: miArray.filter(n => typeof n === 'string'),
        Objects: miArray.filter(n => typeof n === 'object')
    };
}

const nuevoArray = dividirPorTipos(miArray);
console.log(nuevoArray);