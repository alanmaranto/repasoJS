/* Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves
tipos, tamaño y peso
    https://pokeapi.co/api/v2/pokemon
*/

const request = require('request');

const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon';

request.get(URL_POKEMON, (err, res, allPoke) => {
    const respuesta = JSON.parse(allPoke).results;

    for(let i=0; i<=2; i++){
        request.get(respuesta[i].url, (err, res, eachPoke) => {
            const respuesta = JSON.parse(eachPoke);

            let eachPokemon = {
                nombre: respuesta.name,
                movimientos: respuesta.moves,
                tipos: respuesta.types,
                tamaño: respuesta.height,
                peso: respuesta.weight,
            }
            
            console.log(eachPokemon)
        })
    }
});