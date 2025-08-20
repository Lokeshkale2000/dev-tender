const mongoose = require("mongoose");

const connectionDB = async () => {
  const url =
    "mongodb+srv://lokeshkale2020:meRh2FKPyFNo6KHe@cluster0.lqnzlu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/devtinder";

  await mongoose.connect(url);
};
connectionDB()
  .then(() => {
    console.log("database conneted started now");
  })
  .catch((err) => {
    console.log("connection failed");
  });

module.exports = {
  connectionDB,
};