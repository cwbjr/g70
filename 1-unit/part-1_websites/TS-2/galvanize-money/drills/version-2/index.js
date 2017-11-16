// Your code here

var register = {
    transactions: []
};

function addTransaction(transaction) {
    register.transactions.push(transaction);
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

function getTransactionsBetween(transaction1, transaction2) {
    var transactionsArray = [];
    var transaction1 = new Date(transaction1);
    var transaction2 = new Date(transaction2);
    for (var i = 0; i < register.transactions.length; i++) {
        var pastDates = register.transactions[i].date;
        if (pastDates >= transaction1 && pastDates <= transaction2) {
            transactionsArray.push(register.transactions[i]);
        }
    }
    return transactionsArray;
}
module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    countSalesOfType,
    getTransactionsBetween,
    reset,
};
