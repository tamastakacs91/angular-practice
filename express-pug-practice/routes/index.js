const express = require('express');

const router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/', (req, res, next) => {
=======
router.get('/', function(req, res, next) {
>>>>>>> 67a67377777d27ce73bd752ff1a7a1646f17b793
  res.render('index', { title: 'Express', user: req.user || {} });
});

module.exports = router;
