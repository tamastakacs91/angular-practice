const path = require('path');
const fs = require('fs');

// osztály, ami a db fájlokat kezeli
module.exports = class DB {
  // paraméterként átadjuk a json fájl nevét a constructornak
  constructor(jsonFileName) {
    // elérési útvonalak a json fájlokhoz
    this.jsonDirectory = path.join('./../json');
    // teljes elérési út egy json fájlhoz
    this.jsonFilePath = path.join(this.jsonDirectory, `${jsonFileName}.json`);

    console.log(this.jsonFilePath);
  };

  find(id = 0) {
    return new Promise((resolve, reject) => {
      if (id === 0) {
        this.getJsonArray().then(
          dataArray => resolve(dataArray),
          err => reject(err)
        );
      } else {
        this.getJsonArray().then(
          dataArray => {
            let found = dataArray.filter(item => item.id == id)[0] || {};
            resolve(found);
          }
        )
      }
    });
  };

  getJsonArray() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          return reject(err);
        }
        resolve(JSON.parse(jsonString));

        /* //óvatosan kezeli a benne lévő parancsot
        //ha nem sikerült, akkor nem áll le, hanem átadja a hibát egy catch-nek
        try { } */

      });
    });
  };
};
