const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");

const PORT = process.env.PORT || 3001;

server.use(cors());
server.use(router);

server.listen(PORT, () => {
  console.log("The server is running on a port =", PORT);
});
