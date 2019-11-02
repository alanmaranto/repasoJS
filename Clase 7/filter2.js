/* A partir del arreglo dado, genera un nuevo arreglo en el que solo se encuentren los conejos del arreeglo original */
const animalitos = [
    { nombre: 'osito', especie: 'conejo'},
    { nombre: 'snoppy', especie: 'perro'},
    { nombre: 'bunny', especie: 'conejo'},
    { nombre: 'bad', especie: 'conejo'},
    { nombre: 'bugs', especie: 'conejo'},
    { nombre: 'garfield', especie: 'gato'},
]

const animalesLista = animalitos.filter(animal => animal.especie === 'conejo')
console.log(animalesLista);