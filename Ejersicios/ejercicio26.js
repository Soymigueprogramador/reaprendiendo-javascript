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

const users = [
    {
        name: 'Juan',
        age: 25,
        plan: 'Full'
    },
    {
        name: 'Ana',
        age: 30,
        plan: 'Full'
    },
    {
        name: 'Carlos',
        age: 28,
        plan: 'Standard'
    },
    {
        name: 'Lucía',
        age: 22,
        plan: 'Premium'
    }
];

const usersEspañol = users.map(u => ({
    edad: u.age,
    nombre: u.name,
    plan: u.plan 
}));

const todos = [...usuarios, ...usersEspañol]; 

usuarios.sort((a, b) => {
    return b.edad - a.edad;
});

const lista = todos.map(usuario => `<li> Nombre: ${usuario.nombre}, edad: ${usuario.edad} </li>`); 

const html = `
<ul>
${lista.join(`
    `)}
</ul>
`;

console.log(html);