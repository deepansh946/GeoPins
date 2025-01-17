const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  picture: String,
  email: String,
});

module.exports = mongoose.model('User', UserSchema);
