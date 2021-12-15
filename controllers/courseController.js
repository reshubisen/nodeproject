const Course = require('./../models/courseModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');

exports.getAllCourses = factory.getAll(Course);
exports.getCourse = factory.getOne(Course);
exports.createCourse = factory.createOne(Course);
exports.updateCourse = factory.updateOne(Course);
exports.deleteCourse = factory.deleteOne(Course);

exports.getCourseCustomFiltered = catchAsync(async (req, res, next) => {
  const filter =
    req.params.field === 'subject'
      ? { 'subjects.name': req.params.value }
      : { 'subjects.stream': req.params.value };
  let courses = await Course.aggregate([
    {
      $lookup: {
        from: 'subjects',
        localField: 'subjects',
        foreignField: '_id',
        as: 'subjects'
      }
    },
    {
      $unwind: {
        path: '$subjects'
      }
    },
    {
      $match: filter
    },
    {
      $sort: { avgPrice: 1 }
    },
    {
      $project: {
        'subjects.modifiedBy': 0,
        'subjects.createdAt': 0,
        'subjects.updatedAt': 0,
        createdAt: 0,
        updatedAt: 0
      }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          name: '$name'
        }
      }
    }
  ]);
  courses = courses.map(el => el._id);

  res.status(200).json({
    status: 'success',
    data: {
      courses
    }
  });
});
