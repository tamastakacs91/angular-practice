const DB = require('./db');
<<<<<<< HEAD
=======
const urlParser = require('url');
>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67

module.exports = class GetHandler {
  constructor(req, res) {

<<<<<<< HEAD
    const reqParams = req.url.split('/');

    const ordersDB = new DB(reqParams[1]);
    const id = reqParams[2] || 0;
    ordersDB.find(id).then(
      data => res.end(JSON.stringify(data)),
      err => {
        res.statusCode = 404;
        res.end(JSON.stringify(err))
      }
    );
=======
    // Example: /orders/7 => ["", "orders", "7"]
    const parsedUrl = urlParser.parse(req.url);
    const reqParams = parsedUrl.pathname.split('/');

    //
    console.log(parsedUrl.query);
    const ordersDB = new DB(reqParams[1]);
    const id = reqParams[2] || 0;
    ordersDB.find(id, parsedUrl.query).then(
      data => res.end( JSON.stringify(data) ),
      err => {
        res.statusCode = 404;
        res.end(JSON.stringify(err));
      }
    );

>>>>>>> 0b8a3c3635e6abd1bb3fcd035f99cd3788db1e67
  }
};
