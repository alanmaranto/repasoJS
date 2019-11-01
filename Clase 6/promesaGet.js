const request = require('request');

function getInfoId(id){
    return new Promise((resolve, reject) => {
        const URL = `https://swapi.co/api/people/${id}/`
        request.get(URL, (err,response,data)=> {
            const json = JSON.parse(data);
            if (response.statusCode === 200) {
                resolve(json);
            } else {
                reject('statusCode')
            }
        })
    })
}

function getMovieByUrl(url){
    return new Promise((resolve, reject) => {
        request.get(url, (err,response,data) => {
            const json = JSON.parse(data)
            response.statusCode === 200
            ? resolve(json)
            : reject(statusCode)
        })
    })
}

getInfoId(10345)
    .then(response => getMovieByUrl(response.films[0]))
    .then(response2 => console.log(response2.title))
    .catch(err => console.log(`error: ${err}`))

// Traigo toda la información del personaje 1
// getInfoId(1)
//     .then(id => console.log(id))
//     .catch(err => console.log(error))