const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
