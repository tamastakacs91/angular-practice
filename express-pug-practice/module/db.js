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
};
