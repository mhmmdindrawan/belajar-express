import net from "net";

const server = net.createServer((client) => {
  console.log("Client connected");

  socket.addListener("data", (data) => {
    console.info(`Received data: ${data.toString()}`);
    client.write(`Hello: ${data.toString()}\r\n`);
  });

  client.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});