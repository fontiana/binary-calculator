const expect = require("chai").expect;
const Calculator = require("../source/calculator");

describe("Binary calculator", function() {

    var calculator;
    beforeEach(function() {
        calculator = new Calculator();
    })

    it("should create calculator successfuly", function() {
        expect(calculator).to.not.equal(undefined);
    });

    it("should calculate the sum of binary numbers correctly", function() {
        var sum = calculator.sum();
        expect(sum).to.be.equal(2);
    });

});