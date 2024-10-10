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

function obtenerMayor(usuarios) {
    let mayor = usuarios[0];
    for (let usuario of usuarios) {
        if (usuario.edad > mayor.edad) {
            mayor = usuario;
        }
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);
