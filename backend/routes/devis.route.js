let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let devisSchema = require('../models/Devis');

// CREATE Student
router.route('/create-devis').post((req, res, next) => {
  devisSchema.create(req.body, (error, data) => {
    if (error) {
      console.log(req.body)
      return next(error)
    } else {
      console.log(data)
      res.json(data)
      console.log(req.body)
    }
  })
});

// READ Students
router.route('/').get((req, res) => {
  devisSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-devis/:id').get((req, res) => {
  devisSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(req.query)
      res.json(data)
    }
  })
})


// Update Student
router.route('/update-devis/:id').put((req, res, next) => {
  devisSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {

      res.json(data)
      console.log(console.log(req.body),'Devis updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-devis/:id').delete((req, res, next) => {
  devisSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;