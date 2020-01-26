const jwt = require("jsonwebtoken");
const User = require("./models/user");

const auth = async (req, res, next) => {
  try {
    // console.log("auth middleware");
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, "thisissecret");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    if (!user) {
      return res.send({ resType: -1 }); //no user found
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    // console.log(e);
    res.status(401).send({ resType: 0 }); //please authenticate
  }
};

module.exports = auth;
