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

  async login(user) {
    const sql = `
    SELECT * FROM users
    WHERE email = '${user.email}'
      AND password = SHA1('${user.password}')
    `;

    const result = await this.conn.query(sql);
    return result;
  }

  // token cookie kimentése, update-elése a db-ben
  async setUserToken(id, token) {
    const sql = `
    UPDATE users
    SET token = '${token}' WHERE id = ${id}
    `;
    const result = this.conn.query(sql);
    return true;
  }

  // megkapja a requestet és megnézi, hogy szerepel-e a cookie tartalma a db-ben (token)
  async checkLogin(req) {
    if (!req.cookies.uuid) {
      return false;
    }
    const sql = `
      SELECT * FROM users
      WHERE token = '${req.cookies.uuid}'
    `;
    const result = await this.conn.query(sql); // a lekérdezés tömbbel tér vissza
    return result[0]; // visszaadja magát a user-t
  }

  async read() {
    const sql = `
    SELECT *
      FROM users
      `;

    // const conn = await pool.getConnection(); //--> a connection limit miatt kiszervezzük a constructorba
    const result = await this.conn.query(sql);
    return result;
  }

  async create(data) {
    const sql = `
    INSERT INTO users 
    (name, email, password, token) 
    VALUES
    ('${data.name}', '${data.email}', SHA1('${data.password}'), 1)
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
