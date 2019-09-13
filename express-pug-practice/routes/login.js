const express = require('express');

const router = express.Router();

const UserDB = require('../module/user');

const db = new UserDB();

const getToken = (l = 20) => {
  let result = '';
  for (let i = 0; i < l; i++) {
    const index = Math.round(Math.random() * 50 + 65); // 65-ös karakterkódtol indulva 20 karakter random
    result += String.fromCharCode(index);
  }
  return result;
};

/* GET home page. */
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
});

module.exports = router;
