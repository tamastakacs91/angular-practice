const express = require('express');

const router = express.Router();
const DB = require('../module/db');

const db = new DB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  // let products = await db.mockData();
  const realData = await db.read();
  console.log(realData[0]);

  res.render('products', { title: 'Products', products: realData });
});

router.get('/new', async (req, res, next) => {
  res.render('new-product');
});

// Create new product.
router.post('/', async (req, res, next) => {
  const result = await db.create(req.body);
  res.redirect('/products');
});

router.get('/delete/:id', async (req, res, next) => {
  const result = await db.delete(req.params.id);
  res.redirect('/products');
});

router.get('/:id', async (req, res, next) => {
  const selectedProduct = await db.readOne(req.params.id);
  const selected = selectedProduct[0];
  res.render('update-product', { product: selected });
});

router.post('/:id', async (req, res, next) => {
  const result = await db.update(req.params.id, req.body);
  res.redirect('/products');
});

module.exports = router;
