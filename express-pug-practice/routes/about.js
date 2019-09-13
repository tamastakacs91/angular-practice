const express = require('express');

const router = express.Router();


router.get('/', async (req, res, next) => {
  res.render('about', {
    title: 'About',
    user: req.user || {},
  });
});


module.exports = router;
