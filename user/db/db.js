const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("User service connect to MongoDB");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = connect;
