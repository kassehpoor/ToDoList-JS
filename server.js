const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end('Hello from Saleh khafan...');
  });

server.listen(4444, (err) => {
  if (err) {
    return console.error('something bad happened', err);
  }

  console.log(`server is listening on 4444`);
});