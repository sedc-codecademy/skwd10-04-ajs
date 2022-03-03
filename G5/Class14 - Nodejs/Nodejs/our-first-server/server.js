const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");

  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("Hello World =)");
});

server.listen(port, hostname, () => {
  console.log(`Server is running on HOST:${hostname} PORT:${port}`);
});