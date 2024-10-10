const usuarios = [
    {
        nombre: 'Juan',
        edad: 25,
        plan: 'Premium'
    },
    {
        nombre: 'Ana',
        edad: 30,
        plan: 'Básico'
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


function getPaidUsers(usuarios) {
    return usuarios.filter(usuario => usuario.plan === 'Premium');
};

console.log( getPaidUsers(usuarios) )