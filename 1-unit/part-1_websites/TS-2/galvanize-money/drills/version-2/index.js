// Your code here

var register = {
    transactions: []
};

function addTransaction(myObject) {
    register.transactions.push(myObject);
}

function reset() {
	register.transactions = [];
}

function countSalesOfType(itemType) {
  var smallItemType = itemType.toLowerCase();
    for (var i = 0; i < register.transactions.length; i++) {
    	for (var j = 0; j < register.transactions[i].items.length; j++) {
    		var itemDescription = register.transactions[i].items[j].description.toLowerCase();
    		if (smallItemType === itemDescription) {
				var itemQuantity = register.transactions[i].items[j].quantity;
				return itemQuantity;
    		}
    	}
    }
}

function getTransactionsBetween(startDate, endDate) {
	var salesDates = [];
	var startSale = new Date(startDate);
	var endSale = new Date(endDate);
  	for (var i = 0; i < register.transactions.length; i++) {
  		var pastDates = new Date(register.transactions[i].date);
    		if (pastDates >= startSale && pastDates <= endSale) {
    			salesDates.push(pastDates);
    		}
  	}
	return salesDates;
}


module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    countSalesOfType,
    getTransactionsBetween,
    reset,
};
