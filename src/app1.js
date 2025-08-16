const express = require("express");

const app = express();
const { connectionDB } = require("./database");
const {UserModel}= require('./schema')

const port = 8000;

app.post("/insertuserdata", async(req, res) => {
    const user = new UserModel({
        firstName: "lokesh",
        lastName: "Kale",
        email:"lokeshkale22002@gmail.com"
    })
    await user.save();
    res.send("user added successfully")
    console.log(user)

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
