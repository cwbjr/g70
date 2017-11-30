var register = {
    transactions: [];
};

function addTransaction(transaction) {
    register.transactions.push(transaction);
}

function reset() {
    register.transactions = [];
}

function getTransactionsBySalesperson(cashierName) {
    var salesTransactions = [];
    for (let i = 0; i < register.transactions.length; i++) {
        var getName = register.transactions[i].cashier;
        if (cashierName === getName) {
            salesTransactions.push(register.transactions[i]);
        }
    }
    return salesTransactions;
}

function removeLastTransaction() {
    register.transactions.pop();
}

module.exports = {
    register,
    addTransaction,
    getTransactionsBySalesperson,
    removeLastTransaction,
    reset
};
