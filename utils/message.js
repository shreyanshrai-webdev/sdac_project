const os = require("os");
console.log(os.tmpdir());
console.log(os.homedir());
console.log(os.type());
console.log(os.cpus());

const fs = require("fs");
fs.writeFile("message.txt", "hello,node.js", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file created...");
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.appendFile("message.txt", "\n new appended line ", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file appended...");
});

fs.unlink("message.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("message deleted...");
});

// http

const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/home") {
    resp.end("Home Page....");
  } else if (req.url === "/about") {
    resp.end("About...");
  } else {
    resp.end("Error...");
  }
});

server.listen(3000, () => {
  console.log("Running");
});
