const request = require('request');

const URL = 'http://pokeapi.co/api/v2/pokemon/134';

request.get( URL, (error, response, body) => {
    response.statusCode === 200
    ? console.log(`Types: ` + JSON.parse(body).types.map(type => type.type.name)
    )
    : console.log(error);
});