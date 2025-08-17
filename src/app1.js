const express = require("express");

const app = express();
const { connectionDB } = require("./database");
const { UserModel } = require("./schema");
const { renderSync } = require("sass");

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

//get all the data from the users
app.get("/getuserdata", async (req, res) => {
  try {
    const user = await UserModel.find({})
    res.send(user);
  } catch (err) {
    res.status(400).send("something went wrong")
    
  }
});

// find one data from the user by mail 
app.get("/user", async (req, res) => {
  const usermail = req.body.email;
  try {
    const user = await UserModel.findOne({ email: usermail });
    if (user.length === 0) {
      res.status(404).send("user not found");
    } else {
       res.send(user);
    }

   
  } catch (err) {
    res.status(400).send("something went wrong");
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
