const mongoose = require('mongoose');
const familySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

    const Family = mongoose.model('Family', familySchema);
    module.exports = Family;