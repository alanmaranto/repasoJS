const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
    if (request.method === 'POST' && request.url == "/echo") {
        let body = [];

        request
            .on('data', chunk => {
                body.push(chunk);
            })
            .on('end', () => {
                response.writeHead(200, {'Content-Type': 'text/plain'})
                body = Buffer.concat(body).toString();
                response.end('hello world\n');
            });
    } else {
        response.statusCode = 404;
        response.end();
    }
});
server.listen(8001);
console.log('Server listening on localhost:8001')
