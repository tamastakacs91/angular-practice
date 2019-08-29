const http = require('http');
const path = require('path');
const GetHandler = require('./module/getHandler');

const port = 3210;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //lehetővé teszi a CORS kéréseket (más domainről való elérés)
  switch (req.method.toLowerCase()) {
    case 'get':
      new GetHandler(req, res);
      break;
      // idejön majd még a post, put, delete
    default:
      res.end('Invalid method!');
  }
});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
