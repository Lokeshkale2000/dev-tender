const mongoose = require("mongoose");
const { types } = require("sass");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
      type: String,
      
  },
  age: {
    tpye: Number,
  },
  gender: {
    type: String,
  },
});


const UserModel= mongoose.model("User", userSchema);
module.exports ={UserModel}
