const express = require('express');

const router = express.Router();
const DB = require('../module/db');

const db = new DB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  // let products = await db.mockData();
  const realData = await db.read();
  console.log(realData[0]);

  res.render('products', { title: 'Products', products: realData, user: req.user || {} });
});

router.get('/new', async (req, res, next) => {
  res.render('new-product', { user: req.user || {} });
});

router.get('/update/:id', async (req, res, next) => {
  let selectedProductForSilvy = await db.read(req.params.id);
  console.log(selectedProductForSilvy);
  res.render('update-product', {product: selectedProductForSilvy[0]});
});

// Create new product.
router.post('/', async (req, res, next) => {
  const result = await db.create(req.body);
  res.redirect('/products');
});

router.post('/update', async (req, res, next) => {
  let result = await db.update(req.body);
  res.json(result);
});

router.get('/delete/:id', async (req, res, next) => {
<<<<<<< HEAD
  const result = await db.delete(req.params.id);
  res.redirect('/products');
});

router.get('/:id', async (req, res, next) => {
  const selectedProduct = await db.readOne(req.params.id);
  const selected = selectedProduct[0];
  res.render('update-product', { product: selected, user: req.user || {} });
});

router.post('/:id', async (req, res, next) => {
  const result = await db.update(req.params.id, req.body);
  res.redirect('/products');
=======
  let result = await db.delete(req.params.id);
  res.json(result);
>>>>>>> 67a67377777d27ce73bd752ff1a7a1646f17b793
});

module.exports = router;
