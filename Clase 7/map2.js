/* A partir del siguiente arreglo , generzr un nuevo arreglo que contenga los poderes de los superheroes */
const superheroes = [
    { nombre: 'batman', editorial: 'dc', poderes: ['ninguno', 'dinero','tecnologo'] },
    { nombre: 'spiderman', editorial: 'marvel', poderes: ['sentido aracnido', 'trepar', 'perder a su tio']},
    { nombre: 'superman', editorial: 'dc', poderes: ['volar', 'fuerza']},
    { nombre: 'hulk', editorial: 'marvel', poderes: ['fuerza', 'es verde']},
    { nombre: 'gatubela', editorial: 'dc', poderes: ['astuta', 'robar']},
];

const filterbySuperpoder = superheroes.map(poderes => poderes.poderes[2])
console.log(filterbySuperpoder);