const express = require('express');

const router = express.Router();


router.get('/', async (req, res, next) => {
  res.render('contact', {
    title: 'Contact',
    user: req.user || {}
  });
});


module.exports = router;
