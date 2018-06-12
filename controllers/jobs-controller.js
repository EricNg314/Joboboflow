
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));



router.get("api/admin/cohort/:id?/job-table", function(req, res) {
  if(req.params.cohort_id) {
    db.Job.findAll({
    where: {
      cohort_id: req.params.cohort_id
    }
    }).then(function(result) {
      return res.json(result);
    });
  } 
  else {
    db.Job.findAll({}).then(function(result) {
      res.json(result)
    });
  }
});


router.get("api/admin/cohort/:id?/job-table", function(req, res) {
  if(req.params.cohort_id) {
    db.Job.findAll({
    where: {
      cohort_id: req.params.cohort_id
    }
    }).then(function(result) {
      return res.json(result);
    });
  } 
  else {
    db.Job.findAll({}).then(function(result) {
      res.json(result)
    });
  }
});



router.get("api/admin/cohort/:id?/users/:id?/job-search", function(req, res) {
  if (cohort_id && user_id) {
    db.Job.findAll({
    where: {
      cohort_id: req.params.cohort_id,
      user_id: req.params.user_id
    }
    }).then(function(result) {
      return res.json(result);
    })
  }
  else {
    db.Job.findAll({}).then(function(result) {
      res.json(result)
    });
  }
});


module.exports = router;
