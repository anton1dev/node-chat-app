const net = require('net');
const readLine = require('readline/promises');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

const moveCursor = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

const socket = net.createConnection(
  { host: '127.0.0.1', port: 3008 },
  async () => {
    console.log('connected to server!');

    const ask = async () => {


      const message = await rl.question('Enter your message here > ');

      await moveCursor(0, -1);

      await clearLine(0);

      socket.write(message);
    };

    ask();


    socket.on('data', async (data) => {
      console.log();
      await moveCursor(0, -1);
      await clearLine(0);
      console.log(data.toString('utf-8'));

      ask();
    });

  }
);

socket.on('end', () => {
  console.log('connection was ended!');
})