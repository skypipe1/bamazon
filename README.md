# Bamazon App

```
Welcome to Bamazon! This is an Amazon-like storefront built with JavaScript, MySQL, and Node.js. 

Within the customer portal, you can choose an item you'd like to purchase
along with the quantity! Transaction complete! However, if we do not have enough 
of the selected item in stock deeming us unable to fulfill your purchase, the transaction 
will not complete.

Happy shopping!
 ```
 ## Customer Module

The customer module lets users select a product to purchase, enter the number of items they wish to purchase, and then complete the purchase.

The complete purchase process shows how much the total cost is (based on number of items).

The customer module also updates to the total sales for a department, based on the purchased product's department.

To run this module in the terminal:

`node bamazonCustomer.js`

<a href="https://youtu.be/iu_4OceMyWY">Video Demo</a>


 ## Third-party Node Modules

Bamazon uses these node modules: [`console.table`](https://www.npmjs.com/package/console.table), [`inquirer`](https://www.npmjs.com/package/inquirer), [`mysql`](https://www.npmjs.com/package/mysql).

They are all dependencies in the [package.json], so just run:

`npm install`



