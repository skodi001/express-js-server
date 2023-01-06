const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact me");
});

app.get("/about", (req, res) => {
  res.send("About me");
});

app.get("/hobbie", (req, res) => {
  res.send("football");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
