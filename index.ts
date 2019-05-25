import * as express from "express";
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api/hello", (req, res) => {
  return res.json({
    message: "Hello, World"
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));