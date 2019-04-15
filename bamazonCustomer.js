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
  items();
});

var itemSelected;
var sql = `UPDATE products 
          SET stock_quantity = ? 
          WHERE item_id = ?`;

var data;

function items() {
  connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + ' | ' + res[i].stock_quantity);
    }
    console.log("-----------------------------------");

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'product_ID',
          message: 'What is the ID of the product that you would like to purchase?'
        }
      ])
      .then(function(answer) {
        itemSelected = answer.product_ID;
        purchaseAmount();
      });
    });
  }

  function purchaseAmount() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'items',
          message: 'How many of this item would you like to purchase?'
        }
      ])
      .then(function(answer) {
        connection.query(sql, data, itemSelected)

      });
  }

// connection.end();