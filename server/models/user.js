const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  tokens: [
    {
      token: {
        type: String
      }
    }
  ]
});

userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.methods.generateAuthToken = async function() {
  // console.log("hellpo");
  const user = this;
  try {
    const token = jwt.sign({ _id: user._id.toString() }, "thisissecret");

    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
  } catch (e) {
    console.log(e);
  }
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

// Hash the plain text password before saving
userSchema.pre("save", async function(next) {
  const user = this;
  console.log("saving user pwd: *" + user.password + "*");
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.statics.findByCredentials = async (email, password) => {
  console.log(email);
  console.log("*" + password + "*");
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error("Unable to login");
  }
  console.log(user.password);
  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);
  console.log();
  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
