const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('ya te entendi, esta es mi contestación\n');
});
server.listen(8000);
console.log('Server listening on port 8000');