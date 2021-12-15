const express = require('express');
const courseController = require('./../controllers/courseController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/:field/:value').get(courseController.getCourseCustomFiltered);

router
  .route('/')
  .get(courseController.getAllCourses)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.createCourse
  );

router
  .route('/:id')
  .get(courseController.getCourse)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.updateCourse
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.deleteCourse
  );

module.exports = router;
