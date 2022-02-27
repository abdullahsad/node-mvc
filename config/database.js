const mongoose = require("mongoose");

const { MONGO_URI } = process.env;
const { MONGO_USER_NAME } = process.env;
const { MONGO_USER_PASSWORD } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      authSource: "admin",
      user: MONGO_USER_NAME,
      pass: MONGO_USER_PASSWORD,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};