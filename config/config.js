var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.11.139',
    database : 'performance_review',
    user     : 'demo',
    password : 'demo',
    port:'3306'
});



// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : '192.168.11.139',
//   user            : 'demo',
//   password        : 'demo',
//   database        : 'performance_review',
//   port:'3306'
// });

  

module.exports = {
  secret: 'worldisfullofdevelopers',

  connection
};

