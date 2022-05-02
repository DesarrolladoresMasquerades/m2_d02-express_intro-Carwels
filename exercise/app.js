const express = require("express");

require("dotenv/config");

const app = express();

app.use(express.static("public"));

app.all("/", (request, response) => {
  response.sendFile(__dirname + "/views/hobbies.html");
});

app.all("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("*", function (req, res) {
  res.send("Sorry, page not found...Blame our developer", 404);
});

app.listen(3000, () => {
  console.log("loading");
});
