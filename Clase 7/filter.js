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

const filterId = listaAnimales.filter(animal => animal.id > 3)
console.log(filterId)