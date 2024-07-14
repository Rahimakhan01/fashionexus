// models/Design.js
const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Design', designSchema);
