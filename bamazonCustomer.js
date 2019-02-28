var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: 'Minecraft420',
    database: 'Bamazon'
});

function welcomePrompt() {
    inquirer.prompt([{
        type: 'confirm',
        name: "confirm",
        message: 'Welcome to Bamazon! Would you like to shop with us today?',
        default: true
    }]).then(function (input) {
        if (input.confirm === true) {
            promptPurchase();
        } else {
            console.log("Thank you come again!")
        };
    });
};

function promptPurchase() {
    inquirer.prompt([{
        type: 'input',
        name: 'item_id',
        message: 'Please enter the Item ID which you would like to purchase.',
        validate: checkForNumberInput,
        filter: Number
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'How many do you need?',
        validate: checkForNumberInput,
        filter: Number
    }]).then(function (input) {

        var item = input.item_id;
        var quantity = input.quantity;

        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, { item_id: item }, function (err, data) {
            if (err) throw err;


            if (data.length === 0) {
                console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
                displayInventory();

            } else {
                var productData = data[0];

                if (quantity <= productData.stock_quantity) {
                    console.log('The product you requested is in stock! Placing order!');

                    var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                    
                    connection.query(updateQueryStr, function (err, data) {
                        if (err) throw err;

                        console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
                        console.log('Thank you for shopping with us!');
                        console.log("\n---------------------------------------------------------------------\n");

                        connection.end();
                    });
                } else {
                    console.log('There is not enough product in stock, your order can not be placed.');
                    console.log('Please modify your order.');
                    console.log("\n---------------------------------------------------------------------\n");

                    displayInventory();
                };
            };
        });
    });
};

function displayInventory() {
    
    queryProducts = 'SELECT * FROM products';
    
    connection.query(queryProducts, function (err, data) {
        if (err) throw err;

        console.log('Existing Inventory: ');
        console.log('...................\n');

        var itemTable = '';
        for (var i = 0; i < data.length; i++) {
            itemTable = '';
            itemTable += 'Item ID: ' + data[i].item_id + '  ||  ';
            itemTable += 'Product Name: ' + data[i].product_name + '  ||  ';
            itemTable += 'Department: ' + data[i].department_name + '  ||  ';
            itemTable += 'Price: $' + data[i].price + '\n';

            console.log(itemTable);
        };

        console.log("---------------------------------------------------------------------\n");

        welcomePrompt();
    });
};

function runBamazonApp() {
   
    displayInventory();
};

runBamazonApp();

function checkForNumberInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a positive number!.';
    };
};