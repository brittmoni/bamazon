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

DELETE FROM products WHERE item_id = 1;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Coffee maker', 'Housewares', 75, 25),
('Vaccuum cleaner', 'Housewares', 125, 50),
('Beats Headphones', 'Electronics', 200, 100),
('Michael Kors handbag', 'Women\'s Fashion', 100, 20),
('Portable charger', 'Electronics', 15, 200),
('Microfiber blanket', 'Furnishings', 30, 500),
('45 inch TV', 'Electronics', 300, 125),
('Bookbag', 'School Supplies', 15, 350),
('Mattress set', 'Housing', 250, 400),
('6 Pack of Socks', 'Accessories', 10, 357);

UPDATE products
SET stock_quantity = 25
WHERE item_id = 2;

UPDATE products
SET stock_quantity = 100
WHERE item_id = 4;

UPDATE products
SET stock_quantity = 500
WHERE item_id = 7;

UPDATE products
SET stock_quantity = 125
WHERE item_id = 8;