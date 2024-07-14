// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  designs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Design' }],
});

module.exports = mongoose.model('User', userSchema);
