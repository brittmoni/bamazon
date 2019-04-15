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
        },
        {
          type: 'input',
          name: 'items',
          message: 'How many of this item would you like to purchase?'
        }
      ])
      .then(function(answer) {
        connection.query(`UPDATE products SET stock_quantity = ${res[answer.product_ID].stock_quantity} - ${answer.items} WHERE item_id = ${answer.product_ID}`, function(err) {
          if (err) throw err;

          if (res[answer.product_ID].stock_quantity > 0) {
            console.log('Order placed');
          } else {
            console.log('Sorry, we are out of that product');
          }
        })
        
      });
    });
  }

  // function purchaseAmount() {
  //   inquirer
  //     .prompt([
  //       {
  //         type: 'input',
  //         name: 'items',
  //         message: 'How many of this item would you like to purchase?'
  //       }
  //     ])
  //     .then(function(answer) {
  //       connection.query('UPDATE products SET stock_quantity =', res.items, 'WHERE item_id =', itemSelected, function(err, res){
  //         console.log;
  //       })

  //     });
  // }

// connection.end();