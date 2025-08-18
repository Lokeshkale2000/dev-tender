const mongoose = require("mongoose");
const { types } = require("sass");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    tpye: Number,
  },
  gender: {
    type: String,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel };
