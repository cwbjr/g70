const assert = require("assert");
const yourCode = require("../index");

describe("Galvanize Money", () => {
    it("can add a transaction object to the register array", () => {
        assert.ok(typeof yourCode.register !== "undefined", "You need a register");
        assert.ok(typeof yourCode.register === "object" && !(yourCode.register instanceof Array), "Your register needs to be an object");
        assert.ok(yourCode.register.transactions, "Your register needs transactions");
        assert.ok(yourCode.register.transactions instanceof Array, "Your register needs to be an array");
        assert.equal(yourCode.register.transactions.length, 0, "Your register needs to initialize to an empty array");
        assert.equal(typeof yourCode.addTransaction, "function", "You need a function called addTransaction");
        const transaction = {
            date: new Date("2017-01-01"),
            cashier: "Kyle",
            items: [{
                id: 1,
                price: 1.00,
                description: "Mittens",
                quantity: 1
            },{
                id: 2,
                price: 2.00,
                description: "Hat",
                quantity: 2
            }]
        };
        yourCode.addTransaction(transaction);
        assert.deepEqual(yourCode.register.transactions[0], transaction);

        assert.equal(typeof yourCode.reset, "function", "You need a function named reset");
        yourCode.reset();
        assert.equal(yourCode.register.transactions.length, 0, "Your register should be empty");
    });
    it("can return the transactions for a particular salesperson", () => {
        assert.equal(typeof yourCode.getTransactionsBySalesperson, "function", "You need a function called getTransactionsBySalesperson");
        const transaction1 = {
            cashier: "Kyle"
        };
        const transaction2 = {
            cashier: "Kyle"
        };
        const transaction3 = {
            cashier: "Kim"
        };
        yourCode.addTransaction(transaction1);
        yourCode.addTransaction(transaction2);
        yourCode.addTransaction(transaction3);
        assert.deepEqual(yourCode.getTransactionsBySalesperson("Kyle"), [transaction1, transaction2], "Should count Kyle's sales correctly");
        assert.deepEqual(yourCode.getTransactionsBySalesperson("Kim"), [transaction3], "Should count Kim's sales correctly");

        assert.equal(typeof yourCode.reset, "function", "You need a function named reset");
        yourCode.reset();
        assert.equal(yourCode.register.transactions.length, 0, "Your register should be empty");
    });
    it("can remove the most recent transaction", () => {
        assert.equal(typeof yourCode.removeLastTransaction, "function", "You need a function called removeLastTransaction");
        assert.equal(yourCode.register.transactions.length, 0, "Transactions should initialize to an empty array");
        var transaction1 = {cashier: "Kyle"};
        var transaction2 = {cashier: "Kim"};
        var transaction3 = {cashier: "Marlena"};
        yourCode.addTransaction(transaction1);
        yourCode.addTransaction(transaction2);
        yourCode.addTransaction(transaction3);
        assert.equal(yourCode.register.transactions.length, 3, "Should have 3 transactions after adding them");
        yourCode.removeLastTransaction();
        assert.deepEqual(yourCode.register.transactions, [transaction1, transaction2], "Should have 2 transactions after removing last one");
        yourCode.removeLastTransaction();
        assert.deepEqual(yourCode.register.transactions, [transaction1], "Should have 1 transaction after removing last one");
        yourCode.removeLastTransaction();
        assert.equal(yourCode.register.transactions.length, 0, "Your register should be empty");
    });
});
