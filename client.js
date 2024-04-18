const net = require('net');

const client = net.createConnection({ host: '127.0.0.1', port: 3008 }, () => {
  console.log('connected to server!');
});

client.on('close', () => {
  console.log('closed!');
})

client.end('end', () => {
  console.log('connection was ended!');
})