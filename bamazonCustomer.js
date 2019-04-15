var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // items();
});

// function items() {
//   inquirer
//     .prompt({

//     })
// }

connection.query('SELECT * FROM products', function(err, res){
  if (err) throw err;

  inquirer  
    .prompt([
      {
        name: 'item',
        type: 'rawlist',
        choices: function() {
          var itemsArr = [];
          for (var i = 0; i < res.length; i++) {
            itemsArr.push(res[i].product_name);
          }
          return itemsArr;
        }
      }
    ])
})