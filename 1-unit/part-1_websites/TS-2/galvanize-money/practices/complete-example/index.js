var register = {
    transactions: []
}

function addTransaction(transaction){
    register.transactions.push(transaction);
}

function getTotal(){
    var total = 0;
    for (let i = 0; i < register.transactions.length; i++){
        for (let j = 0; j < register.transactions[i].items.length; j++){
            total += register.transactions[i].items[j].price * register.transactions[i].items[j].quantity;
        }
    }
    return total;
}

function getFormattedTotal(){
    return getTotal().toFixed(2);
}

function countSalesOfType(type){
    var count = 0;
    for (let i = 0; i < register.transactions.length; i++){
        for (let j = 0; j < register.transactions[i].items.length; j++){
            var item = register.transactions[i].items[j];
            if (item.description === type){
                count += item.quantity;
            }
        }
    }
    return count;
}

function getTransactionsBetween(firstDate, secondDate){
    var transactions = [];
    for (let i = 0; i < register.transactions.length; i++){
        let currentTransaction = register.transactions[i];
        if (currentTransaction.date > new Date(firstDate) && currentTransaction.date < new Date(secondDate)){
            transactions.push(currentTransaction);
        }
    }
    return transactions;
}

function getTransactionsBySalesperson(salesperson){
    var transactions = [];
    for (let i = 0; i < register.transactions.length; i++){
        let currentTransaction = register.transactions[i];
        if (currentTransaction.cashier === salesperson){
            transactions.push(currentTransaction);
        }
    }
    return transactions;
}

function removeLastTransaction(){
    return register.transactions.pop();
}

function reset(){
    register.transactions = [];
}

module.exports = {
    register,
    addTransaction,
    getTotal,
    getFormattedTotal,
    countSalesOfType,
    getTransactionsBetween,
    getTransactionsBySalesperson,
    removeLastTransaction,
    reset
};
