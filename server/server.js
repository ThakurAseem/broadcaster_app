const express = require("express");
const app = express();
const User = require("./models/user");
const auth = require("./auth");
require("./models/DBconnection");

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/login");
});
app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});
app.get("/dashboard", auth, (req, res) => {
  console.log("dashboard req");
  res.send({ resType: 1 });
});
app.post("/signup", async (req, res) => {
  console.log("hwllo");
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    //console.log(token);
    res.status(201).send({ user, token });
  } catch (e) {
    // console.log("hii");
    // console.log(e);
    res.status(400).send(e);
  }
});

app.get("/logout", auth, async (req, res) => {
  try {
    console.log("token");
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send({ resType: 1 });
  } catch (e) {
    res.status(500).send();
  }
});

app.listen(5000, () => console.log("server started"));
