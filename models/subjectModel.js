// Subject Model
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Subject can not be empty!'],
    unique: true
  },
  stream: {
    type: String,
    enum: {
      values: ['Arts', 'Science', 'Commerce', 'IT', 'Games'],
      message: 'Stream is either: Arts, Science, Commerce'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  modifiedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'UserId is required.']
  }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
