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

const listaNombre = []
for(let i=0; i<listaAnimales.length; i++) {
    listaNombre.push(listaAnimales[i].name)
}

console.log(listaNombre);

