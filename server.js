const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  console.log(('new connection to server!'));
})

server.listen(3008, "127.0.0.1", () => {
  console.log('server is live', server.address());
})
