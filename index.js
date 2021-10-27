const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
