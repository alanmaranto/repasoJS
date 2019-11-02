const listaAnimales = [
    {
        id: 1,
        name: 'Perro'
    },
    {
        id: 2,
        name: 'Gato'
    },
    {
        id: 3,
        name: 'Cabra'
    },
    {
        id: 4,
        name: 'Hamster'
    }
];

const listaNombre = listaAnimales.map(nombre => nombre.name)
console.log(listaNombre);