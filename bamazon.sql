CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INT,
  stock_quantity INT,
  PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Coffee maker', 'Housewares', 75, 25);