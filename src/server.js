import { createServer } from "net";

import { HOST, PORT } from '../config';

const server = createServer();
const clients = [];

server.on("connection", (socket) => {
  console.log("new connection to server!");

  const clientId = clients.length + 1;

  clients.map((client) => {
    client.socket.write(`User ${clientId} joined a chat!`);
  });

  socket.write(`id-${clientId}`);

  socket.on("data", (data) => {
    const dataString = data.toString("utf-8");
    const id = dataString.substring(0, dataString.indexOf("-"));
    const message = dataString.substring(dataString.indexOf("-message-") + 9);

    clients.map((client) => {
      client.socket.write(`> User ${id}: ${message}`);
    });
  });

  socket.on("end", () => {
    clients.map((client) => {
      client.socket.write(`User ${clientId} left a chat!`);
    });
  });

  socket.on("error", () => {
    clients.map((client) => {
      client.socket.write(`User ${clientId} left a chat!`);
    });
  });

  clients.push({ id: clientId.toString(), socket });
});

server.listen(PORT, HOST, () => {
  console.log("server is live", server.address());
});
