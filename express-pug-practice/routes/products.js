const express = require('express');

const router = express.Router();

const DB = require('../module/db');

// a .get metódusból kiszerveztük ide, hogy csak egyszer jöjjön létre, ne minden GET kérésnél
const db = new DB();

router.get('/', async (req, res, next) => {
  // const list = await db.mockData(); --> ez a json fájlból nyeri ki az adatokat, alul átírtuk, hogy az adatbázisból szedje ki őket

  const realData = await db.read();
  console.log(realData[0]);

  res.render('products', {
    title: 'Products',
    products: realData,
  });
  // a realData-t adjuk majd át a pug-nak
});


module.exports = router;
