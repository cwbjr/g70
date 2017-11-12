// Your code here

var register = {
  Transactions: []
};

function addTransaction(Transaction) {
  register.Transactions.push(Transaction);
}

function reset() {
	register.Transactions = [];
}

function getTransactionsBySalesperson(cashierName) {
	var salesTransactions = [];
		for (let i = 0; i < register.Transactions.length; i++) {
			var getName = register.Transactions[i].cashier;
				if (cashierName === getName) {
					salesTransactions.push(register.Transactions[i].items);
				}
		}
	return salesTransactions;
}

function removeLastTransaction() {
	register.Transactions.pop();
}

module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    getTransactionsBySalesperson,
    removeLastTransaction,
    reset
};
