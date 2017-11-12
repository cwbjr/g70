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
    it("can count the number of sales of a particular item", () => {
        assert.equal(typeof yourCode.countSalesOfType, "function", "You need a function called countSalesOfType");
        yourCode.addTransaction({
            date: new Date("2017-01-01"),
            cashier: "Kyle",
            items: [{
                id: 1,
                price: 1.00,
                description: "Mittens",
                quantity: 2
            },{
                id: 2,
                price: 2.00,
                description: "Hat",
                quantity: 1
            }]
        });
        assert.equal(yourCode.countSalesOfType("Mittens"), 2, "It should should count Mittens correctly");
        assert.equal(yourCode.countSalesOfType("Hat"), 1, "It should should count correctly");
    });
    it("can return all transactions between two dates", () => {
        assert.equal(typeof yourCode.getTransactionsBetween, "function", "You need a function called getTransactionsBetween");
        const transaction1 = {
            date: new Date("2017-03-02")
        };
        const transaction2 = {
            date: new Date("2017-03-03")
        };
        const transaction3 = {
            date: new Date("2017-03-09")
        };
        yourCode.addTransaction(transaction1);
        yourCode.addTransaction(transaction2);
        yourCode.addTransaction(transaction3);
        assert.deepEqual(yourCode.getTransactionsBetween("2017-03-01", "2017-03-07"), [transaction1, transaction2]);

        assert.equal(typeof yourCode.reset, "function", "You need a function named reset");
        yourCode.reset();
        assert.equal(yourCode.register.transactions.length, 0, "Your register should be empty");
    });
});
