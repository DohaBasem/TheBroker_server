var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Heeey from users');
});


router.post('/login', function (req, res, next) {
  var userToken = req.header('token');
  User.find({token: userToken}, function (err, users) {
    if(err) {
      res.json({
        "error" : true,
        "error_msg" : err.body
      });
    }
    else {
      res.json({
        "user_id" : users[0]._id,
        "error" : false
      });
    }
  });
});
module.exports = router;
