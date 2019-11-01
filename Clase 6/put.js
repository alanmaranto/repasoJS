
const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function updateAuthor(id, name, last_name, nacionalidad, biography,gender, age) {
    const URI = `authors/${id}/`;
    let url_endpoint = URL_BASE + URI;
    var jsonUpdate ={
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age,
    }
    return new Promise((resolve, reject)=> {
        request.put({ url: url_endpoint, form: jsonUpdate}, (error, response, data) => {
            response.statusCode = 200
                ? resolve(JSON.parse(data))
                : reject(`Error en Update. El usuario con id ${id} no fue actualizado`)
        });
    });
}

updateAuthor(1007, "Alan", "maranto", "MX", "bio", "M", 24)
    .then(autor => console.log(autor))
    .catch(error => console.log(error))