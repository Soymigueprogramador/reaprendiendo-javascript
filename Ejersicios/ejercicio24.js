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

function grupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        let valor = el[prop];
        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
};

const grouped = grupBy(usuarios, 'plan')
console.log(grouped)