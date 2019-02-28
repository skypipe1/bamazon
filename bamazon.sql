CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(60) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Computer Keyboard', 'Electronics', 32.47, 450),
		('Gillette Mach3 Mens Razor w/ 15 refills', 'Cosmetics', 20.26, 500),
		('Dash Cam', 'Electronics', 79.99, 350),
		('Air Fryer', 'Home & Kitchen', 31.99, 800),
		('Green Toys Rescue Boat with Helicopter', 'Toys & Games', 18.21, 200),
		('VetWell Dog Ear Wipe','Pet Supplies', 9.99, 267),
		('Featherd Pillow ', 'Home & Kitchen', 31.51, 200),
		('EASELAND Soft Quilted Down  Comforter', 'Home & Kitchen', 47.92, 270),
		('Joopin Semi Rimless Polarized Sunglasses', 'Clothing', 12.99, 575),
		('Camping Chair', 'Sports & Outdoor', 21.50, 420),
        ('DreamSky Alarm Clock Radio', 'Electronics', 21.24, 210),
		('ARTEZA 9X12 Sketch Book', 'Arts & Crafts', 14.99, 400),
		('TaoTronics Noise Cancelling Bluetooth Headphones', 'Electronics', 49.99, 150),
		('Pop Up Tent', 'Sports & Outdoors', 32.99, 120),
		('Stark Safe Cut Resistant Gloves', 'Tools & Home Improvement', 17.88, 160),
		('Home Security Camera', 'Electronics', 59.49, 210),
		('Heat Resistant Kitchen Oven Mitts', 'Home & Kitchen', 12.99, 180),
		('EXPO Low Odor Dry Erase Marker 12PK', 'Arts & Crafts', 21.99, 400)
