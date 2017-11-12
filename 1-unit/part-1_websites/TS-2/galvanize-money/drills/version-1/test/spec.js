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
    it("can sum a collection of transactions", () => {
        assert.equal(typeof yourCode.addTransaction, "function", "You need a function called addTransaction");
        yourCode.addTransaction({
            date: new Date("2017-01-01"),
            cashier: "Kyle",
            items: [{
                id: 1,
                price: 1.00,
                description: "Mittens",
                quantity: 1
            },{
                id: 2,
                price: 2.30,
                description: "Hat",
                quantity: 2
            }]
        });
        assert.equal(typeof yourCode.getTotal, "function", "You need a function called getTotal");
        assert.equal(yourCode.getTotal(), 5.6, "Total should return the correct amount");

        yourCode.addTransaction({
            date: new Date("2017-01-01"),
            cashier: "Steve",
            items: [{
                id: 1,
                price: 1.00,
                description: "Mittens",
                quantity: 3
            },{
                id: 2,
                price: 2.00,
                description: "Hat",
                quantity: 5
            }]
        });
        assert.deepEqual(yourCode.getTotal(), 18.6);

        assert.ok(yourCode.reset, "function", "You need a function named reset");
        yourCode.reset();
        assert.equal(yourCode.register.transactions.length, 0, "Your register should be empty");
    });
    it("can return the total as a string", () => {
        yourCode.addTransaction({
            date: new Date("2017-01-01"),
            cashier: "Kyle",
            items: [{
                id: 1,
                price: 1.00,
                description: "Mittens",
                quantity: 1
            }]
        });
        assert.equal(yourCode.getFormattedTotal(), "1.00");

        assert.equal(typeof yourCode.reset, "function", "You need a function named reset");
        yourCode.reset();
        assert.equal(yourCode.register.transactions.length, 0, "Your register should be empty");
    });
});
