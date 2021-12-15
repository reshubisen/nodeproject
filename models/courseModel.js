// Subject Model
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Course name cannot be empty!'],
    unique: true
  },
  subjects: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Subject'
    }
  ],
  type: {
    type: String,
    enum: {
      values: ['Basic', 'Detailed'],
      message: 'Stream is either: Basic, Medium, Detailed'
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
    required: [true, 'User editing content is required.']
  }
});

courseSchema.index({ type: 1 });

// courseSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'subjects',
//     select: 'name -_id'
//   });
//   next();
// });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
