/* Hacer una funcion que haga una peticion que busque un libro y traiga el o los autores del libro 
    http://openlibrary.org/search.json?q=
    Ejemplo: peticionLibro("i robot");
*/

const request = require('request');

const URL_LIBRERIA = 'http://openlibrary.org/search.json?q=';

let peticionLibro = (titulo) => {
    
    let URL_FINAL = URL_LIBRERIA + titulo;
    request.get(URL_FINAL, (error, response, body) => {
        if (response.statusCode === 200) {
            JSON.parse(body).docs.map(doc => doc.author_name.map(author_name =>console.log(author_name)))
        } else console.log(response.statusCode, error)
    });
}

peticionLibro("por quien doblan las campanas");