const request = require('request');

function getNameById(id){
    const URL = `https://swapi.co/api/people/${id}`;
    request.get(URL, (error, response, body) => {
        console.log(`Status code ---> ${response.statusCode}`);
        const respuestaBody = JSON.parse(body)
        if (response.statusCode === 200) {
            console.log('Petición es correcta');
            console.log(respuestaBody.name)
        }else {
            console.log('Petición es incorrecta');
            console.log(respuestaBody.detail);
        }
    });
}

getNameById(10)