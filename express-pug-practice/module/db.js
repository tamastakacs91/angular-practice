const path = require('path');
const fs = require('fs');

// npm-ről instalálltuk a mariadb-t itt pedig betöltjük (npm i mariadb)
const mariadb = require('mariadb');

// betöltjük a pool-t
const pool = mariadb.createPool({
  database: 'shop', user: 'root', password: 'Receiver@88', connectionLimit: 5,
});


module.exports = class DB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }

  mockData() {
    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, 'products.json');
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          return reject(err);
        }
        resolve(JSON.parse(content));
      });
    });
  }

  async read() {
    const sql = `
    SELECT
    p.id,
      p.name,
      p.stock,
      p.active,
      p.price,
      p.insdate,
      m.name AS manufacturer,
      m.contact AS contact
      FROM
      products p JOIN manufacturers m ON p.manufacturer = m.id
      `;

    // const conn = await pool.getConnection(); //--> a connection limit miatt kiszervezzük a constructorba
    const result = await this.conn.query(sql);
    return result;
  }

  async create(data) {
    const sql = `
    INSERT INTO products 
    (name, manufacturer, price, stock, active) 
    VALUES
    ('${data.name}', ${data.manufacturer}, ${data.price}, ${data.stock}, 1)
    `;

    const result = await this.conn.query(sql);
    return console.log(result);
  }

  async delete(productID) {
    const sql = `
    DELETE FROM products
    WHERE id = ${productID}`;

    const result = await this.conn.query(sql);
    return console.log(result);
  }

  async readOne(selectedID) {
    const sql = `
    SELECT
      id,
      name,
      stock,
      active,
      price,
      insdate,
      manufacturer
      FROM
      products
      WHERE id = ${selectedID}
      `;

    const result = await this.conn.query(sql);
    return result;
  }

  async update(productID, product) {
    const sql = `
    UPDATE products
    SET
    name = '${product.name}',
    manufacturer = ${product.manufacturer},
    price = ${product.price},
    stock = ${product.stock}
    WHERE id = ${productID}
    `;
    const result = await this.conn.query(sql);
    return console.log(result);
  }
};
