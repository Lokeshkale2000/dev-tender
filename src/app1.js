const express = require("express");

const app = express();
const { connectionDB } = require("./database");
const { UserModel } = require("./schema");

const port = 8000;

app.use(express.json());

app.post("/insertuserdata", async (req, res) => {
  // creating a new instance of the user model
  const user = new UserModel(req.body);
  try {
    await user.save();
    res.send("user added successfully");
    console.log(user);
  } catch (err) {
    res.status(400).send("error saving the user" + err.message);
  }
});
connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log("server is listening on port " + port);
    });
  })
  .catch((err) => {
    console.log("server is not runing");
  });
