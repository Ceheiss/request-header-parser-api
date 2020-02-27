const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function(req, res) {
  const ipaddress = req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];
  res.json({ ipaddress, language, software });
});

app.listen(port, () => console.log(`Your app is listening on port ${port}`));
