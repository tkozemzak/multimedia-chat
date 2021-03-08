const express = require("express");
const PORT = 8080;
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

// app.get("/", (req, res) => {
//   res.sendFile(`${__dirname}/index.html`);
// });

io.on("connection", (socket) => {
  console.log("socket connected");
  socket.on("disconnect", () => {
    console.log("socket disconnected");
  });
  socket.on("join", (name) => {
    console.log(name, "joined");
    socket.name = name;
    io.emit("join", name);
  });
  socket.on("chat", (data) => {
    console.log(`chat data: ${JSON.stringify(data, null, 2)}`);
    io.emit("chat", data);
  });
});

http.listen(PORT, () => {
  console.log("Listening on: ", PORT);
});
