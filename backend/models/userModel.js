const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//static signup method
userSchema.statics.signup = async (email, password) => {};

moodule.exports = mongoose.model("User", userSchema);
