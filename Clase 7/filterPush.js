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

const filterList = [];
for (let i=0; i <listaAnimales.length; i++){
    if (listaAnimales[i].id > 3) {
        filterList.push(listaAnimales[i])
    }
}
console.log(filterList);
