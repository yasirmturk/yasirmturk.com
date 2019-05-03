const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");
const app = express();

app.use("/", express.static(path.join(__dirname, "www")));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(8000, () => {
    console.log("Example app listening on port 8000!");
  });
