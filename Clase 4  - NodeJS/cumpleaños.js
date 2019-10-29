const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
    if (request.method === 'POST' && request.url == "/birthday") {
        let body = [];

        request
            .on('data', chunk => {
                body.push(chunk);
            })
            .on('end', () => {
                response.writeHead(200, {'Content-Type': 'text/plain'})
                body = Buffer.concat(body).toString();
                let day = new Date(body);
                let weekday = day.getDay();
                let week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
                response.end(`Tu dia de nacimiento es ${week[weekday]}`);
            });
    } else {
        response.statusCode = 404;
        response.end();
    }
});
server.listen(8002);
console.log('Server listening on localhost:8002')
