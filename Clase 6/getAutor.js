/* Escribe una funcion que reciba como parametro un id pàra realizar una peticion a la 
api para hallar el autor con el id especificado. La funcion debe retornar una promesa con la respuesta del servidor

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

*/

const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

readAuthor = (id) => {
    const uri = `authors/${id}/`;
    const url_final = URL_BASE + uri;
    return new Promise ((resolve, reject)=> {
        request.get(url_final, (error, response, data) => {
            response.statusCode === 200
                ? resolve(JSON.parse(data))
                : reject(`Error 404: el autor con id ${id} no existe`)
        })
    })
};

readAuthor(1)
    .then(autor => console.log(autor))
    .catch(error => console.log(error))
