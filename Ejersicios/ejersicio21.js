const usuarios = [
    {
        nombre: 'Juan',
        edad: 25,
        plan: 'Full'
    },
    {
        nombre: 'Ana',
        edad: 30,
        plan: 'Full'
    },
    {
        nombre: 'Carlos',
        edad: 28,
        plan: 'Estándar'
    },
    {
        nombre: 'Lucía',
        edad: 22,
        plan: 'Premium'
    }
];

function cuantosPremium(usuarios) {
    return usuarios.reduce((acc, el) => 
        el.plan !== 'Full' ? acc + 1 : acc, 0);
}

function cuantosMayores(usuarios, edadMinima) {
    return usuarios.reduce((acc, el) => 
        el.edad > 18 ? acc + 1 : acc, 0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));