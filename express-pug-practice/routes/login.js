<<<<<<< HEAD
const express = require('express');

const router = express.Router();

const UserDB = require('../module/user');

=======
var express = require('express');
var router = express.Router();
const UserDB = require('../module/user');
>>>>>>> 67a67377777d27ce73bd752ff1a7a1646f17b793
const db = new UserDB();

const getToken = (l = 20) => {
  let result = '';
  for (let i = 0; i < l; i++) {
<<<<<<< HEAD
    const index = Math.round(Math.random() * 50 + 65); // 65-ös karakterkódtol indulva 20 karakter random
=======
    let index = Math.round(Math.random()*50+65);
>>>>>>> 67a67377777d27ce73bd752ff1a7a1646f17b793
    result += String.fromCharCode(index);
  }
  return result;
};

/* GET home page. */
<<<<<<< HEAD
router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', async (req, res, next) => {
  const result = await db.login(req.body);
  if (result.length === 1) {
    const token = getToken();
    res.cookie('uuid', token); // beállítja a cookie-t
    await db.setUserToken(result[0].id, token); // kimenti a cookie-t
    return res.redirect('/');
  } res.render('login');
});

router.get('/new-user', (req, res, next) => {
  res.render('new-user');
});

router.post('/new-user', async (req, res, next) => {
  const result = await db.create(req.body);
  res.json(result);
=======
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', async (req, res, next) => {
  let result = await db.login(req.body);
  if (result.length === 1) {
    let token = getToken();
    res.cookie('uuid', token);
    await db.setUserToken(result[0].id, token);
    return res.redirect('/');
  }
  res.render('login', { title: 'Express' });
>>>>>>> 67a67377777d27ce73bd752ff1a7a1646f17b793
});

module.exports = router;
