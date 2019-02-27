var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: 'Minecraft420',
	database: 'Bamazon'
});

// welcomes user to Bamazon
function welcomePrompt(){
    inquirer.prompt([{
        type: 'confirm',
        name: "confirm",
        message: 'Welcome to Bamazon! would you like to shop with us today?',
        default: true
    }]).then(function(input){
        if (input.confirm === true){
            promptPurchase();
        }else{
            console.log("Thank you, please visit again soon!")
        }
    })
}

function promptPurchase(){
    inquirer.prompt([{
        type: 'input',
        name: 'item_id',
        message: 'Please enter the Item ID which you would like to purchase.',
        validate: validateInput,
        filter: Number
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'How many do you want?',
        validate: validateInput,
        filter: Number
    }])

}



// function will only allow the user to input a positive number
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}
// welcomePrompt();


// displayInventory displays inventory, then calls welcomePrompt function to welcome the user.
function displayInventory() {
	

	
	queryProducts = 'SELECT * FROM products';

	// Make the db query
	connection.query(queryProducts, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................');

		var itemTable = '';
		for (var i = 0; i < data.length; i++) {
			itemTable = '';
			itemTable += 'Item ID: ' + data[i].item_id + '  ||  ';
			itemTable += 'Product Name: ' + data[i].product_name + '  ||  ';
			itemTable += 'Department: ' + data[i].department_name + '  ||  ';
			itemTable += 'Price: $' + data[i].price;
            
			console.log(itemTable);
		}

	  	console.log("---------------------------------------------------------------------");

	  	
          // promptPurchase();
        welcomePrompt();
	})
}



function runBamazonApp() {


    displayInventory();
}

// Run the application
runBamazonApp();