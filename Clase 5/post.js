const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1';

function createAuthor(nombre,apellido,biografia,genero,edad){
    const URI = 'authors/'
    const URL = URL_BASE + URI

    const postJson = {
        name: nombre,
        last_name: apellido,
        nacionalidad: "MX",
        biography: biografia,
        gender: genero,
        age: edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: URL, form:postJson}, (err, response, data) => {
            if (response.statusCode === 201) {
                const json = JSON.parse(data);
                resolve(json);
            } else {
                reject(response.statusCode);
            }
        });
    });
}

createAuthor('Nombre', 'Apellidod', 'Biografia', 'M',24)
    .then(author => console.log(author.id))
    .catch(err => console.log(err))