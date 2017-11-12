// Your code here


var register = {
        transactions: []
    };
 
// test used the word transactions for perameters.  I originally used myObject as the perameters.
function addTransaction(transactions) {
    register.transactions.push(transactions);
 }

function reset() {
    register.transactions = [];
}

// Break-out with Cass was super helpful in understanding how the for-loop is working with this part.
function getTotal(){
   var total = 0;
   
    for (var i = 0; i < register.transactions.length; i++) {
        for (var j = 0; j < register.transactions[i].items.length; j++) {
            var price = register.transactions[i].items[j].price;
            var quantity = register.transactions[i].items[j].quantity;
            total += price * quantity;
        }
    }
    return total;
}

function getFormattedTotal() {
  return getTotal().toFixed(2);	
}




module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    getTotal,
    getFormattedTotal,
    reset,
};
