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

const pagos = usuarios.filter( usuarios => usuarios.plan !== 'free' );
usuarios.sort((a, b) => {
    if(a.edad < b.edad) {
        return 1;
    }
    if(a.edad > b.edad) {
        return -1;
    }
    return 0;
});

const lista = pagos.map(usuarios => `<li> ${usuarios.nombre} </li>`); 

const html = `
<ul>
${lista.join(`
    `)}
</ul>
`
console.log(html)