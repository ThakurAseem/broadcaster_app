const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/BroadCaster",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, sdsd) => {
    console.log("db connected");
  }
);
