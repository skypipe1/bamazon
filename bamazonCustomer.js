var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: 'Minecraft420',
	database: 'Bamazon'
});



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
        message: 'How many do you need?',
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
promptPurchase();