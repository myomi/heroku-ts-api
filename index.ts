import * as express from "express";
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

interface LoginRequest {
  username: string;
  password: string;
}

app.post("/api/login", (req, res) => {
  const loginRequest = req.body as LoginRequest;
  if (loginRequest.username === 'user01' && loginRequest.password === '1234') {
    return res.status(200).json({
      username: loginRequest.username,
    });
  } else {
    return res.status(401).json({
      message: 'Not authenticated'
    });
  }
});

app.get("/api/hello", (req, res) => {
  return res.json({
    message: "Hello, World"
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));