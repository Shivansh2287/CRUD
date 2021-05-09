const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  phone: {
    type: Number,
    required: true,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  hobbies: {
    type: String,
    required: true,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
